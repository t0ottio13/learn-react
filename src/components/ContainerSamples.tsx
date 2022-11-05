// Constainerは赤背景のボックスの中にタイトルと子要素を表示する
const Constainer = (props: {title: string; children: React.ReactElement}) => {
    const { title, children } = props;

    return (
        <div style={{ background: 'red' }}>
            <span>{title}</span>
            <div>{children}</div>
        </div>
    );
};

const Parent = () => {
    return (
        <Constainer title="Hello">
            {/*　以下のHTMLがpropsのchildrenとして渡される */}
            <p>この部分が背景色で囲まれる</p>
        </Constainer>
    )
};

export default Parent; 