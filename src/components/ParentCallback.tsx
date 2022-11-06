import React, { useState, useCallback} from "react";

type ButtonProps = {
    onClick: () => void;
}

const DecrementButton = (props: ButtonProps) => {
    const { onClick } = props;

    console.log('DecrementButtonは再描画されました')

    return <button onClick={onClick}>Decrement</button>
}

// メモ化した関数コンポーネント
const IncrementButton = React.memo((props: ButtonProps) => {
    const { onClick } = props;

    console.log('IncrementButtonが再描画されました');

    return <button onClick={onClick}>Increment</button>
})

const DoubleButton = React.memo((props: ButtonProps) => {
    const { onClick } = props;

    console.log('DoubleButtonが再描画されました');
    return <button onClick={onClick}>Double</button>
})

export const ParentCallback = () => {
    const [count, setCount] = useState(0);

    const decrement = () => {
        setCount((c) => c -1);
    }

    const increment = () => {
        setCount((c) => c +1);
    }

    // useCallbackを使用して関数をメモ化する
    const double = useCallback(() => {
        setCount((c) => c * 2);
    },[])

    return (
        <div>
            <p>Count: {count}</p>

            {/* コンポーネントに関数を渡す */}
            <DecrementButton onClick={decrement} />

            {/* メモ化したコンポーネントに関数を渡す */}
            <IncrementButton onClick={increment} />

            {/* メモ化したコンポーネントにメモ化した関数を渡す */}
            <DoubleButton onClick={double}/>
        </div>
    )
}