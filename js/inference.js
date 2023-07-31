const ort = require('onnxruntime-node');

async function testList(list) 
{  
    for(var i=0;i<list.length;i++)
    {
        list[i] = list[i]/maxList[i]
    }
    const session = await ort.InferenceSession.create('../model.onnx');
    const dataA = Float32Array.from(list);
    const tensorA = new ort.Tensor('float32', dataA, [1, 8]);
    const dataB = Float32Array.from([0, 0]);
    const feeds = {dense_2_input: tensorA };
    const results = await session.run(feeds); 
    return results
}

const maxList = [1,1,15707,2175,1,1,1,244]
module.exports = {testList};