let html = document.querySelector("#html");
let style = document.querySelector("#style");
let n = 0;

let string = `
/*你好，我叫小白
*接下来我演示一下我的前端功底
*首先我要准备一个div
**/
#div1{
    width: 200px;
    height: 200px;
    border: 1px solid red;
    
}
/*接下来我把div变成一个八卦图
* 注意看好了
* 我先把div变成一个圆
**/

#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5); 
    border: none;
}
/*八卦是阴阳形成的
*一黑一白
*/

#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}
/*接下来加两个小球*/


#div1::before {
    border-radius: 50%;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    background: #000;
    height: 100px;
    width: 100px;
    background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);}


    #div1::after {
        height: 100px;
        width: 100px;
        border-radius: 50%;
        top: 0;
        left: 50%;
        transform: translate(-50%);
        background: #fff;
        background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
    }
    

`
let string2 = '';

let step = () => {
    setTimeout(() => {
        if (string[n] === '\n') {
            //如果是回车就不照搬
            string2 += "<br>"
        } else {
            //如果不是就照搬
            string2 += string[n]
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (n < string.length - 1) {
            //如果n不是最后一个就继续
            step();
        } n += 1;
    }, 0);
}
step();

