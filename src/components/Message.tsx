// 無名関数でコンポーネントを定義し、Textという変数に代入する
// Textコンポーネントは親から`context`というデータを受け取る
const Text = (props: {content: string}) => {
    const { content } = props

    return <p className="text">{content}</p>
}

// ＜感想＞
// 行の終わりに`;`つけないの違和感しかないｗ
// セミコロンはつける派とつけない派がいる、どっちでもいいみたい
// つけたほうが無難らしい
// https://plus1.blog/ts-js-semi/

// 同様に定義したコンポーネントをMessageという変数に代入する
const Message = (props: {}) => {
    const content1 = `This is parent compornent`
    const content2 = `Messafe uses Text compornent`

    return (
        <div>
            {/* contentというキーでコンポーネントにデータを渡す */}
            <Text content={content1}></Text>

            {/* 違うデータを渡すと、違う内容が表示される */}
            <Text content={content2}></Text>
        </div>
    )
}

export default Message