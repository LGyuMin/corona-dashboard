import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const url = 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9f70142f-4f22-4bf9-84d4-62ba9edfcdda/getCovid19GenAgeCaseInfJson.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230107T095004Z&X-Amz-Expires=86400&X-Amz-Signature=a7682d741266d172ec2230a9f8f1ba7213dd870c5bc3eb04ee142a27b02b78e6&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22getCovid19GenAgeCaseInfJson.json%22&x-id=GetObject'

interface IResponse {
    confCase: string
    stateDt: string
    gubun: InterfaseKey
}

type InterfaseKey = 'stateDt' | '0-9' | '10-19' | '20-29' | '30-39' | '40-49' | '50-59' | '60-69' | '70-79' | '80 이상' | '남성' | '여성'

export type NextResType = {
    [key in InterfaseKey]?: string
}

export default function daily_chart(
  req: NextApiRequest,
  nextRes: NextApiResponse<any>
) {
    axios.get(url)
    .then(res => {
        const stateDts: string[] = res.data.items.item
                        .map((item: IResponse) => item.stateDt);

        const uniqStateDts = [...new Set(stateDts)]
        
        const ChartDate: NextResType[] = []

        let obj: NextResType = {}

        const genChartData: any = {}


        uniqStateDts.forEach((date: string) => {
            obj = {}

            const arr = res.data.items.item.filter((item: IResponse) => item.stateDt === date);
                        
            obj.stateDt = date

            arr.forEach((item: IResponse) => {
                obj[item.gubun] = item.confCase
            })

            genChartData[date] = [
                { id: '남성', label: '남', value: obj.남성 },
                { id: '여성', label: '여', value: obj.여성 }
            ]

            ChartDate.push(obj)
        });

        const ageChartData = ChartDate.map(item => {
            const temp = {...item}
            delete item.남성
            delete item.여성
            return temp
        })

        nextRes.status(200).json({
            ageChartData,
            genChartData
        })
    })
    .catch(err => {
        nextRes.status(500).json(err)
    })
}