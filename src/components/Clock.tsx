import React, { useState, useEffect } from 'react';

const UPDATE_CYCLE = 1000;

// localstarageで使用するキー
const KEY_LOCAL = 'KEY_LOCAL';

enum Local {
    US = 'en-US',
    JP = 'ja-JP',
}

const getLocalFromString = (text: string) => {
    switch (text) {
        case Local.US:
            return Local.US
        case Local.JP:
            return Local.JP
        default:
            return Local.US
    }
}

export const Clock = () => {
    const [timestamp, setTimestamp] = useState(new Date());

    const [locale, setLocale] = useState(Local.US);

    // タイマーの初期化処理
    useEffect(() => {
        // setIntervalは第一引数の関数を、第二引数の間隔で実行する
        const timer = setInterval(() => {
            setTimestamp(new Date())
        }, UPDATE_CYCLE)

        return () => {
            clearInterval(timer)
        }

        // 第二引数に空配列を渡すと初期描画時のみに実行される
    }, [])

    // localStorageの読み込み
    useEffect(() => {
        const saveLocale = localStorage.getItem(KEY_LOCAL)
        if(saveLocale !== null){
            setLocale(getLocalFromString(saveLocale));
        }
    }, [])

    // localStorageへの保存
    useEffect(() => {
        localStorage.setItem(KEY_LOCAL, locale);
    }, [locale])

    return (
        <div>
            <p>
                <span id="current-time-label">現在時刻</span>
                <span>:{timestamp.toLocaleTimeString(locale)}</span>
                <select
                    value={locale}
                    onChange={(e) => setLocale(getLocalFromString(e.target.value))}
                    >
                    <option value="en-US">en-US</option>
                    <option value="ja-JP">ja-JP</option>
                </select>
            </p>
        </div>
    )

    // まとメモ
    // useEffectは、描画関数を実行し、DOMが更新され、画面に描画された後で実行される
    // これの仕組みにより、再描画の無限ループを防げる
    // 例
    // 1.ユーザー操作で状態が変わる
    // 2.描画関数が実行され、状態を更新して、再描画
    // 3.状態の更新をキャッチして、また描画関数が.....無限ループ
}