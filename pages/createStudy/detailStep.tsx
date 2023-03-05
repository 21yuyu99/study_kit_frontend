import styles from '../../styles/createStudy/detailStep.module.scss';
import Link from 'next/link';
import { AddPhoto, CountMember, InputBox, InputDeadline, InputSpace, SelectOnOff } from '@/components/inputBox';
import { etc, it, job, language, license } from '@/components/inputBox/content';
import { useReducer, useState } from 'react';
import { checkBoxTypes } from '@/types/createStudy';
import { WidthButton } from '@/components/widthButton';
import { Range } from 'react-date-range';
import TopNavigation from '@/components/topNavigation';
import { WarningBox, WarningMsg } from '@/components/msgBox';
import { useRouter } from 'next/router';
export default function DetailStep() {
  const router = useRouter();
  const queryResult = router.query.type;
  const [title, setTitle] = useState("");
  const [lan, setLan] = useState("");
  const [tool, setTool] = useState("");
  const [tag, setTag] = useState("");
  const [goal,setGoal] = useState("");
  const [toggle, setToggle] = useState(false);
  const [essentialCheck, setEssential] = useState(true);
  const [warningStatus, setWarning] = useState(false);
  const [licnse,setLicnse] =useState("");
  const [score,setScore] = useState("");
  const countReducer = (state: { count: number }, action: { type: String }) => {
    switch (action.type) {
      case "INCREMENT":
        return state.count < 50 ? { ...state, count: state.count + 1 } : state;
      case "DECREMENT":
        return state.count > 1 ? { ...state, count: state.count - 1 } : state;
      default:
        return state;
    }
  }
  const [countState, countDispatch] = useReducer(countReducer, { count: 1 });
  const checkReducer = (state: { check: checkBoxTypes[] }, action: { type: String }) => {
    switch (action.type) {
      case "ONLINE":
        let onTemp: checkBoxTypes[] = [];
        state.check.map(
          check => {
            check.content === "비대면" ?
              onTemp.push({ ...check, isChecked: !check.isChecked })
              : onTemp.push({ ...check, isChecked: false })
          }
        )
        return (
          { ...state, check: onTemp }
        )
      case "OFFLINE":
        let offTemp: checkBoxTypes[] = [];
        state.check.map(
          check => {
            check.content === "대면" ?
              offTemp.push({ ...check, isChecked: !check.isChecked }) : offTemp.push({ ...check, isChecked: false })
          }
        )
        return (
          { ...state, check: offTemp }
        )
      default:
        return state;
    }
  }
  const [checkState, checkDispatch] = useReducer(checkReducer, {
    check:
      [
        {
          content: "대면",
          isChecked: false
        },
        {
          content: "비대면",
          isChecked: false,
        }
      ]
  }
  );
  const [range, setRange] = useState<Range[]>(
    [
      {
        startDate: new Date(),
        endDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 2),
        key: 'range',
      }
    ]
  );
  let type: {
    title: string;
    subTitle: string;
  }[] = [{ title: "", subTitle: "" }];
  if (typeof (queryResult) === "string") {
    switch (queryResult) {
      case "it":
        type = it;
        break;
      case "job":
        type = job;
        break;
      case "license":
        type = license;
        break;
      case "language":
        type = language;
        break;
      case "etc":
        type = etc;
        break;
    }
  }
  return (
    <>
      <div className={styles.topProgressBar}>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
      </div>
      <TopNavigation title={"스터디 개설 (2/3)"} backSpace={true} rightIcon={"box"} backgroundStyle={0}></TopNavigation>
      <main className={styles.main}>
        {
        type.map(
            (x) => {
              switch (x.title) {
                case "스터디 제목":
                  return (
                    <InputBox key={type.indexOf(x)} number={type.indexOf(x) + 1} title={x.title} subTitle={x.subTitle}>
                      <InputSpace text={title} setText={setTitle} />
                      {(title === "" && essentialCheck === false) ? (
                        <WarningMsg msg="필수 항목입니다." />
                      ) : <></>}
                    </InputBox>
                  );
                case "목표 기한":
                  return (
                    <InputBox key={type.indexOf(x)} number={type.indexOf(x) + 1} title={x.title} subTitle={x.subTitle}>
                      <InputDeadline toggle={toggle} setToggle={setToggle} range={range} setRange={setRange} />
                      <></>
                    </InputBox>
                  )
                case "자격증":
                  return (
                    <InputBox key={type.indexOf(x)} number={type.indexOf(x) + 1} title={x.title} subTitle={x.subTitle}>
                      <InputSpace text={licnse} setText={setLicnse} />
                      {(licnse === "" && essentialCheck === false) ? (
                        <WarningMsg msg="필수 항목입니다." />
                      ) : <></>}
                    </InputBox>
                  )
                case "인원 설정":
                  return (
                    <InputBox key={type.indexOf(x)} number={type.indexOf(x) + 1} title={x.title} subTitle={x.subTitle}>
                      <CountMember state={countState} dispatch={countDispatch} reducer={countReducer} />
                      <></>
                    </InputBox>
                  )
                case "사용 언어":
                  return (
                    <InputBox key={type.indexOf(x)} number={type.indexOf(x) + 1} title={x.title} subTitle={x.subTitle}>
                      <InputSpace text={lan} setText={setLan} />
                      {(lan === "" && essentialCheck === false) ? (
                        <WarningMsg msg="필수 항목입니다." />
                      ) : <></>}
                    </InputBox>
                  )
                case "사용 도구":
                  return (
                    <InputBox key={type.indexOf(x)} number={type.indexOf(x) + 1} title={x.title} subTitle={x.subTitle}>
                      <InputSpace text={tool} setText={setTool} />
                      {(tool === "" && essentialCheck === false) ? (
                        <WarningMsg msg="필수 항목입니다." />
                      ) : <></>}
                    </InputBox>
                  )
                case "태그 남기기":
                  return (
                    <InputBox key={type.indexOf(x)} number={type.indexOf(x) + 1} title={x.title} subTitle={x.subTitle}>
                      <InputSpace text={tag} setText={setTag} />
                      <></>
                    </InputBox>
                  )
                case "대면/ 비대면":
                  return (
                    <InputBox key={type.indexOf(x)} number={type.indexOf(x) + 1} title={x.title} subTitle={x.subTitle}>
                      <SelectOnOff state={checkState} dispatch={checkDispatch} reducer={checkReducer} />
                      {((checkState.check[0].isChecked === false && checkState.check[1].isChecked === false) && essentialCheck === false) ? (
                        <WarningMsg msg="필수 항목입니다." />
                      ) : <></>}
                    </InputBox>
                  )
                case "사용 목적":
                  return (
                    <InputBox key={type.indexOf(x)} number={type.indexOf(x) + 1} title={x.title} subTitle={x.subTitle}>
                      <InputSpace text={goal} setText={setGoal} />
                      {(goal === "" && essentialCheck === false) ? (
                        <WarningMsg msg="필수 항목입니다." />
                      ) : <></>}
                    </InputBox>
                  )
                case "목표 점수":
                  return (
                    <InputBox key={type.indexOf(x)} number={type.indexOf(x) + 1} title={x.title} subTitle={x.subTitle}>
                      <InputSpace text={score} setText={setScore} />
                      {(score === "" && essentialCheck === false) ? (
                        <WarningMsg msg="필수 항목입니다." />
                      ) : <></>}
                    </InputBox>
                  )
                default:
                  return (
                    <InputBox key={type.indexOf(x)} number={type.indexOf(x) + 1} title={x.title} subTitle={x.subTitle}>
                      <InputSpace text={title} setText={setTitle} />
                      {(title === "" && essentialCheck === false) ? (
                        <WarningMsg msg="필수 항목입니다." />
                      ) : <></>}
                    </InputBox>
                  );
              }
            }
          )
        }
      </main>
      <div className={styles.bottomContainer}>
        {(type===it&&(title === "" || lan === "" || tool === "" ||(checkState.check[0].isChecked === false && checkState.check[1].isChecked === false)))||
        (type===job&&(title===""||goal===""||(checkState.check[0].isChecked === false && checkState.check[1].isChecked === false)))||
        (type===etc&&(title===""||(checkState.check[0].isChecked === false && checkState.check[1].isChecked === false)))||
        (type===license&&(title===""||licnse===""||(checkState.check[0].isChecked === false && checkState.check[1].isChecked === false)))||
        (type===language&&(title===""||lan===""||score===""||(checkState.check[0].isChecked === false && checkState.check[1].isChecked === false)))
         ?
          (
            <>
              <WarningBox message="필수 항목을 모두 선택한 후 넘어가주세요." status={warningStatus} setStatus={setWarning} />
              <span className={styles.grayButtonWrapper} onClick={() => { setEssential(false); setWarning(true) }}><WidthButton color="gray" buttonText="다음" /></span>
            </>)
          : <Link className={styles.blueButtonWrapper} href="/createStudy/studyIntro" onClick={()=>{}}><WidthButton color="blue" buttonText="다음"/></Link>
        }
      </div>
    </>
  )
}