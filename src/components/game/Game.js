import React, { useRef, useState } from 'react';
import './Game.css';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const Game = () => {

    const [currentQuestion, setCurrentQuestion] = useState(getRandomInt(20));
    const [finish, setFinish] = useState(false);
    const [score, setScore] = useState(0);
    const [backImg, setBackImg] = useState("game1")
    const registerName = useRef();
    const navigate = useNavigate();

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    //クイズ
    const questions = [
        {
            questionText: '山内君が部活動紹介で起こした事件は？',
            answerOptions: [
                { answerText: '暴投で壁に穴を開ける', isCorrect: true },
                { answerText: '火災', isCorrect: false },
                { answerText: '廃部', isCorrect: false },
            ],
        },
        {
            questionText: '山内君がママチャリで横浜まで行く途中で買って邪魔になったものは？',
            answerOptions: [
                { answerText: 'いろはす24本', isCorrect: false },
                { answerText: 'MacBook Pro 13インチ', isCorrect: false },
                { answerText: 'パイナップルまるごと', isCorrect: true },
            ],
        },
        {
            questionText: '山内君が女性とのドライブ中にやらかしたことは？',
            answerOptions: [
                { answerText: '2時間の沈黙', isCorrect: false },
                { answerText: '見知らぬ家の破壊', isCorrect: true },
                { answerText: '歴代のアンパンマン主題歌を流し続ける', isCorrect: false },
            ],
        },
        {
            questionText: '山内君がKANA-BOON『フルドライブ』MVのYoutubeコメント欄で1900以上のいいねをもらったコメントは？',
            answerOptions: [
                { answerText: '『運転中聞いてはいけない曲第1位』', isCorrect: true },
                { answerText: '『今でも聞いてる人🙋』', isCorrect: false },
                { answerText: '『虫苦手だからカナブンは停車してて欲しい』', isCorrect: false },
            ],
        },
        {
            questionText: 'このゲームの制作者が山内君にされたことは？',
            answerOptions: [
                { answerText: '靴紐を猫じゃらしにすり替え', isCorrect: false },
                { answerText: 'アルコール消毒ロック割り', isCorrect: false },
                { answerText: '貸してたクロスバイクを廃品回収に出す', isCorrect: true },
            ],
        },
        {
            questionText: '山内君の靴のサイズは?',
            answerOptions: [
                { answerText: '23.5cm', isCorrect: false },
                { answerText: '興味ない', isCorrect: true },
                { answerText: '興味ない', isCorrect: true },
            ],
        },
        {
            questionText: '友達からバリカンを借りて坊主にしてる途中にバリカンを没収されて半分坊主になった山内君がとった行動は？',
            answerOptions: [
                { answerText: 'お母さんと友達の家に交渉', isCorrect: true },
                { answerText: '生涯半分坊主', isCorrect: false },
                { answerText: '暴力', isCorrect: false },
            ],
        },
        {
            questionText: '山内君が2年以上二郎系ラーメンを食べていない理由は',
            answerOptions: [
                { answerText: 'イチローへのリスペクト', isCorrect: false },
                { answerText: '人体の水分60%,タンパク質18%,脂肪18%,鉱物質3.5%の割合を維持するため', isCorrect: false },
                { answerText: 'お腹を壊すから', isCorrect: true },
            ],
        },
        {
            questionText: '山内君の洋楽を聞いている人に対する下劣な思考は？',
            answerOptions: [
                { answerText: 'スワヒリ語の曲も聞いてるの？', isCorrect: false },
                { answerText: '英語がわからないなら聞く意味がわからない', isCorrect: true },
                { answerText: 'You are in Japan now. Aren’t you?', isCorrect: false },
            ],
        },
        {
            questionText: '山内君が高速教習で困ったことは？',
            answerOptions: [
                { answerText: '身長190cmの人が運転した後の座席のまま発進してしまった', isCorrect: true },
                { answerText: '大谷翔平の球速を超えた', isCorrect: false },
                { answerText: '運転中にKANA-BOON『フルドライブ』が流れた', isCorrect: false },
            ],
        },
        {
            questionText: '山内君のお父さんの好きな食べ物は？',
            answerOptions: [
                { answerText: 'アバレンジャーソーセージ', isCorrect: true },
                { answerText: 'アバレンジャーソーセージ', isCorrect: true },
                { answerText: 'アバレンジャーソーセージ', isCorrect: true },
            ],
        },
        {
            questionText: '山内君が野球の試合で起こした功績は？',
            answerOptions: [
                { answerText: '代打逆転３ベース', isCorrect: false },
                { answerText: '試合に出ていないため功績なし', isCorrect: true },
                { answerText: 'メガネを犠牲にしての死球', isCorrect: false },
            ],
        },
        {
            questionText: '2023年10月現在の山内君のInstagramのプロフィール欄は？',
            answerOptions: [
                { answerText: '『一生懸命頑張ります』', isCorrect: true },
                { answerText: '『生後267ヶ月（22歳）』', isCorrect: false },
                { answerText: '『SINCE 267ヶ月前』', isCorrect: false },
            ],
        },
        {
            questionText: '2023年10月現在の山内君のX(旧Twitter)の固定ポスト(旧ツイート)は？',
            answerOptions: [
                { answerText: 'QUICPay使ってる俺かっこいい', isCorrect: false },
                { answerText: 'もうドリンクバーで元をとるとか言えない年齢', isCorrect: false },
                { answerText: '頑張ります！！！任せろ！！！！！！', isCorrect: true },
            ],
        },
        {
            questionText: 'WBCで日本代表優勝後に山内君がしたポスト（旧ツイート）は？',
            answerOptions: [
                { answerText: '二度とない最高のドラマだったな〜', isCorrect: true },
                { answerText: '世界最高の試合！', isCorrect: true },
                { answerText: '日本最高！やる気爆発💪', isCorrect: true },
            ],
        },
        {
            questionText: '山内君が自転車走行中に警察に頻繁に捕まる理由は？',
            answerOptions: [
                { answerText: 'イヤホンより目立つヘッドフォンをしているから', isCorrect: true },
                { answerText: '不気味だから', isCorrect: false },
                { answerText: '自転車のライトでは周りを照らすことができないくらい不気味だから', isCorrect: false },
            ],
        },
        {
            questionText: '夜中に寝ている山内君を何も伝えず栃木県の温泉の近くまで連れて行った結果、目覚めた山内君の発言は？',
            answerOptions: [
                { answerText: '高速道路で帰って', isCorrect: true },
                { answerText: '高速道路で帰って', isCorrect: true },
                { answerText: '高速道路で帰って', isCorrect: true },
            ],
        },
        {
            questionText: '1961年4月12日、ガガーリン氏は人類初となる108分間の宇宙飛行で『地球は青かった』という名言を残したとされますが、山内君の好きな色は？',
            answerOptions: [
                { answerText: '緑', isCorrect: false },
                { answerText: '青', isCorrect: true },
                { answerText: '白', isCorrect: false },
            ],
        },
        {
            questionText: '看護の道を切り開いたナイチンゲールの名言は『進歩しつづけない限りは、後退していることと同じです。目標を高く掲げなさい。』ですが、現在の山内君の目標は？',
            answerOptions: [
                { answerText: 'COVID-19を引き起こす病原体の『SARS-CoV-2』の研究を進める', isCorrect: false },
                { answerText: '噴出しているジェットに着目しそこから根元にあるブラックホールの自転の有無を確かめる', isCorrect: false },
                { answerText: 'バイトのシフトを増やす', isCorrect: true },
            ],
        },
        {
            questionText: '黄熱の病原体解明に命をかけた細菌学者野口英世の名言は「天才は勉強だ。勉強することが天才なのだ。」ですが、山内君のTOEICの点数は？',
            answerOptions: [
                { answerText: '355', isCorrect: true },
                { answerText: '990', isCorrect: false },
                { answerText: '890', isCorrect: false },
            ],
        },
    ];

    const handleAnswerButtonClick = (isCorrect) => {

        const nextQuestion = getRandomInt(questions.length);

        if (isCorrect === true) {
            alert('正解です');
            setScore(score + 1);
            //背景をランダムに変更する
            const haikei = document.querySelector("." + backImg);
            haikei.classList.remove(backImg);
            const rundomNumber = getRandomInt(8) + 1;
            if (rundomNumber === 1) {
                haikei.classList.add("game1");
                setBackImg("game1")
            } else if (rundomNumber === 2) {
                haikei.classList.add("game2");
                setBackImg("game2")
            } else if (rundomNumber === 3) {
                haikei.classList.add("game3");
                setBackImg("game3")
            } else if (rundomNumber === 4) {
                haikei.classList.add("game4");
                setBackImg("game4")
            } else if (rundomNumber === 5) {
                haikei.classList.add("game5");
                setBackImg("game5")
            } else if (rundomNumber === 6) {
                haikei.classList.add("game6");
                setBackImg("game6")
            } else if (rundomNumber === 7) {
                haikei.classList.add("game7");
                setBackImg("game7")
            } else if (rundomNumber === 8) {
                haikei.classList.add("game8");
                setBackImg("game8")
            };

            setCurrentQuestion(nextQuestion);

        } else {
            alert('不正解です');
            setFinish(true)
        }
    }


    //記録と名前を保存
    const recordScore = async (e) => {
        e.preventDefault();
        if (registerName.current.value === "") {
            window.alert("名前を入力してください")
            return
        };
        await axios.post("/post/register", {
            username: registerName.current.value,
            score: score,
        });
        window.alert("ランキングに参加しました");
        navigate("/rank")
    }


    return (
        <div className='game1'>
            {finish ?
                <>
                    <h1 className='count'>{"連続正解数は" + score + "でした"} </h1>
                    <form className='register' onSubmit={(e) => recordScore(e)}>
                        <input className='input'
                            type='text'
                            maxLength="10"
                            placeholder='名前を入力してランキング参加'
                            ref={registerName}
                        />
                        <button className='submitResult'>ランキングに参加</button>
                    </form>
                    <li className='return' >
                        <Link to="/" className='Link'>登録しない</Link>
                    </li>
                </>

                :
                <>
                    <div className="flex">
                        <h1 className='count'>{"連続正解数:" + score}</h1>
                        <li className='reset' >
                            <Link to="/" className='Link'>中断</Link>
                        </li>
                    </div>
                    <div className='question'>{"Q:　" + questions[currentQuestion].questionText}</div>
                    <ul className='answers'>
                        {
                            questions[currentQuestion].answerOptions.map((answerOption, key) => (
                                <li key={key}
                                    onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
                                    className='answer'
                                >
                                    {answerOption.answerText}
                                </li>)
                            )
                        }
                    </ul>
                </>
            }
        </div>
    )
}


export default Game
