import { useState } from 'react';

type CounterProps = {
    initialValue: number;
};

const Counter = (props: CounterProps) => {
    const { initialValue } = props;

    // useStateは状態を扱うためのフック
    // countが現在の状態、setCountが状態を更新する関数
    const [ count , setCount ] = useState(initialValue);

    return (
        <div>
            <p>Count: {count}</p>

            {/* setCountを呼ぶことで状態を更新します */}
            {/* 引数として値を渡すと、その値がそのまま次の状態になる */}
            <button onClick={() => setCount(count -1)}>-</button>

            {/* 関数を渡すと戻り値が次の状態になる、引数のprevには現在のcountが入る */}
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
        </div>
    );
};

export default Counter;
