import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const url = 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/84168dd6-1a38-4965-90a9-0f08f82280ed/getCovid19InfStateJson.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230107T070621Z&X-Amz-Expires=86400&X-Amz-Signature=ce95f18693dea402823a886d4ae5c45e2f012835039eeb4cc8dbfeb7f771da64&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22getCovid19InfStateJson.json%22&x-id=GetObject'

export default function daily_chart(
  req: NextApiRequest,
  nextRes: NextApiResponse<any>
) {
    axios.get(url)
    .then(res => {
        const chatData = res.data.items.item.map((item: { stateDt: any; decideCnt: any }) => {
            return {
                x: item.stateDt,
                y: item.decideCnt
            }
        }).reverse()

        nextRes.status(200).json({ data: [
            {
                id: '일일 확진자 수',
                data: chatData
            }
        ] })
    })
    .catch(err => {
        nextRes.status(500).json(err)
    })
}