import request from 'request-promise'
import fs from 'fs'
import jsdom from 'jsdom'
import path from 'path'
async function main(url){
  const result = await request(url)//.pipe(fs.createWriteStream('index.html'))
  const dom =new jsdom.JSDOM(result)
  const nodeList = dom.window.document.querySelectorAll(".r a")
  const dataList=[];
  for(const node of nodeList){
    const data = node.getAttribute("data")
    if(data){
      dataList.push(data)
    }
  }

  for(const data of dataList){
    const result= await request(`https://wwwapi.kugou.com/yy/index.php?r=play/getdata&callback=jQuery191022551916733875133_1551406911310&hash=${
      data.split("|")[0]
    }&_=1551406911311`)
    const json = result.replace('jQuery191022551916733875133_1551406911310(', '').replace(');', '')
    // const json = result.match(/^jQuery191022551916733875133_1551406911310\((.+)\);$/g)
    const url = JSON.parse(json).data.play_url;
    await request(url).pipe(fs.createWriteStream(path.basename(url)))
  }
}
main('https://www.kugou.com/yy/special/single/610220.html')
