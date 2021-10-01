// sigmoid 函数
export const sigmoid = (x: number) => 1 + Math.tanh(2 * x - 1)
// cpu限制器
export const cpuLimit = () => _.ceil(Game.cpu.limit * sigmoid(Game.cpu.bucket / 10000))
