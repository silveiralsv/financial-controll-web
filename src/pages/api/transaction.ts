/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from "next";
import { TransactionObject } from "../../types/Transaction";
import { ResponseError } from "../../types/Api/Error";
import { fauna } from "../../services/fauna";
import { query as q } from "faunadb";

type TransactionRequest = NextApiRequest & {
  transaction: TransactionObject;
};

type FaunaAllTransactions = {
  data: Array<{
    ref: {
      id: string;
    },
    data: TransactionObject
  }>;
};

export default async (
  req: TransactionRequest,
  res: NextApiResponse<TransactionObject | ResponseError>
) => {
  switch (req.method) {
    case "POST":
      try {
        const { transaction } = req.body;
        if (!transaction) throw new Error();

        const newTransaction = await fauna.query<TransactionObject>(
          q.Create(q.Collection("transactions"), { data: { ...transaction } })
        );

        return res.status(200).json(newTransaction);
      } catch (error) {
        return res.status(500).json({ message: "An error ocurred" });
      }
    case "GET":
      try {
        const transaction = await fauna.query<FaunaAllTransactions>(
          q.Map(
            q.Paginate(q.Match(q.Index("all_transactions"))),
            q.Lambda("doc", q.Get(q.Var("doc")))
          )
        );
        const mapped = transaction.data.map(eaData => ({
          ...eaData.data,
          id: eaData.ref.id
        }));
        return res.status(200).json(mapped as any);
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "An error ocurred" });
      }
    default:
      return res
        .status(400)
        .json({ message: "This route does not support this method" });
  }
};
