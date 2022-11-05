import React from "react";

// Title用のContextを作成
const TitleContext = React.createContext('');

const Title = () => {
    // Consumerを使って、Contextの値を参照する
    return (
        <TitleContext.Consumer>
            {/* Consumer直下に関数を置いて、Contextの値を参照する */}
            {(title) => {
                return <h1>{title}</h1>
            }}
        </TitleContext.Consumer>
    )
};

const Header = () => {
    return (
        <div>
            {/* HeaderからTitleへは何もデータを渡さない */}
            <Title></Title>
        </div>
    )
};

const Page = () => {
    const title = 'React Book';

    // Providerを使いContextに値をセットする
    // Provider以下のコンポーネントから値を参照できる
    // Headerに見るとprops渡しをしていないことが確認できる
    return (
        <TitleContext.Provider value={title}>
            <Header />
        </TitleContext.Provider>
    );
};

// Contextを作成して、Providerで値をセット、Consumerで参照する
// Providerは入れ子にでき、一番近いProviderの値を参照する

export default Page;