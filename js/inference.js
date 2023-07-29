const ort = require('onnxruntime-node');

async function testList(list) {
    try {
        const session = await ort.InferenceSession.create('../model.onnx');
        const dataA = Float32Array.from(list);
        const tensorA = new ort.Tensor('float32', dataA, [1, 9]);
        const dataB = Float32Array.from([0, 0]);
        const feeds = {dense_input: tensorA };
        const results = await session.run(feeds);
        console.log(results);
    } catch (err) {
        console.error(err);
    }
}

testList([82064, 12572, 0, 0, 27, 0, 0, 0, 26])