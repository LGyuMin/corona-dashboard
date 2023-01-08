import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import { promises as fs } from 'fs'

const url = 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/84168dd6-1a38-4965-90a9-0f08f82280ed/getCovid19InfStateJson.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230108T101513Z&X-Amz-Expires=86400&X-Amz-Signature=4174f1a55d11502d87dc51fee305a5e003d41292358376e8317dbb6d2589bf04&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22getCovid19InfStateJson.json%22&x-id=GetObject'
export default async function daily_chart(
  req: NextApiRequest,
  nextRes: NextApiResponse<any>
) {
    const filePath  = path.join(process.cwd(), 'json');
    const jsonData  = await fs.readFile(filePath  + '/daily_case.json', 'utf8');

    nextRes.status(200).json([
        {
            id: '일일 확진자 수',
            data: JSON.parse(jsonData)
        }
    ])
}