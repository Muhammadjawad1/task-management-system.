import {connection} from "../../src/config/db.config";

export const retrieveById = async  (id: any): Promise<any> => {
    return new Promise((resolve, reject) => {
      connection.query<any[]>(
        "SELECT * FROM abc WHERE id = ?",
        [id],
        (err: any, res: any[]) => {
          if (err) reject(err);
          else resolve(res?.[0]);
        }
      );
    })
  };