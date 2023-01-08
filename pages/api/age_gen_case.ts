import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

import path from 'path'
import { promises as fs } from 'fs'

export default async function daily_chart(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
    const filePath  = path.join(process.cwd(), 'json');
    const jsonData  = await fs.readFile(filePath  + '/age_gen_case.json', 'utf8');
    const resDada = JSON.parse(jsonData)

    res.status(200).json({
        ageChartData: resDada.age,
        genChartData: resDada.gender
    })
}