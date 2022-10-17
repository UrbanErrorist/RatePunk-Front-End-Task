import axios, { AxiosError } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next/dist/shared/lib/utils';
import {
  jsonbinFetchBinEndpoint,
  jsonbinPutBinEndpoint,
} from '../../src/utils/jsonbinEndpoints';

const handleRatings = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'PUT') {
      const { email } = req.body;

      await axios
        .put(
          jsonbinPutBinEndpoint,
          { email },
          {
            headers: {
              'Content-Type': 'application/json',
              'X-Master-Key': process.env.NEXT_PUBLIC_JSONBIN_MASTER_KEY,
            },
          },
        )
        .catch((errorRes: AxiosError) => {
          res
            .status(errorRes.response?.status ?? 500)
            .json(
              errorRes?.response?.data ?? { message: 'Something went wrong' },
            );
          return;
        });

      res.status(200).json({ message: 'Email updated' });
      return;
    } else if (req.method === 'GET') {
      const { data } = await axios.get(jsonbinFetchBinEndpoint, {
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': process.env.NEXT_PUBLIC_JSONBIN_MASTER_KEY,
        },
      });

      res.status(200).json(data.record.email);
      return;
    } else {
      res.status(400).json({ message: 'Invalid request' });
      return;
    }
  } catch (_err) {
    res.status(400).json({ message: 'Invalid request' });
    return;
  }
};

export default handleRatings;
