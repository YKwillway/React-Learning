export const ColorfulMessage = (props) => {
    const {color, children} = props;
// 引数で分割代入を利用する
// export const ColorfulMessage = (color, children) => {
    const contentStyleA = {
        // ↓プロパティとバリューが同名の場合の省略記法
        color,
        fontSize: "18px"
    };

    return (
        // JavaScriptの要素にアクセスする時は「{}」で囲む
        // <p style={contentStyleA}>{props.message}</p>
        // コンポーネントのタグで囲んだ要素を「props.children」で取得する
        <p style={contentStyleA}>{children}</p>
    )
}