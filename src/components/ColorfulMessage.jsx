// 「named export」と呼ばれる
// export const ColorfulMessage = (props) => {

const ColorfulMessage = (props) => {
    console.log("--ColorfulMessage--")
    const {color, children} = props;
    const contentStyleA = {
        color,
        fontSize: "18px"
    };

    return (
        <p style={contentStyleA}>{children}</p>
    )
};

// 「default export」と呼ばれる
// 呼び出し側で名前を決定できる
export default ColorfulMessage;