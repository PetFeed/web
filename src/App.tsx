import * as React from "react";
import "./App.scss";

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <img
                    src="images/s/logo-petfeed.png"
                    alt="logo.png"
                    srcSet="images/l/logo-petfeed.png 1024w, images/m/logo-petfeed.png 640w, images/s/logo-petfeed.png 320w"
                />
                <div className="main">
                    <div className="left-el">
                        <span>너와 나의 반려동물.</span>
                        <span>
                            반려동물에 흠뻑 빠지시거나, 빠지신 경험이 <br />{" "}
                            있으신가요? 그렇다면 반려동물의 이야기 <br /> 세계로
                            당신을 초대합니다.
                        </span>
                        <div>
                            <span>
                                <img src="images/ic-android.svg" alt="" />
                                <span>Android 다운로드</span>
                            </span>
                            <span>
                                <img src="images/ic-ios.svg" alt="" />
                                <span>IOS 다운로드</span>
                            </span>
                        </div>
                    </div>
                    <div className="right-el">
                        <img className="clipping" src="images/main.png" />
                        <svg width="663px" height="928px">
                            <defs>
                                <clipPath
                                    id="svgPath"
                                    transform="translate(997, 152)"
                                >
                                    <path
                                        id="a"
                                        fill="#FFFFFF"
                                        d="M470 295c-27.615 0-50-22.162-50-49.5s22.385-49.5 50-49.5 50 22.162 50 49.5-22.385 49.5-50 49.5M325 514c-65.17 0-118-52.607-118-117.5S259.83 279 325 279c65.171 0 118 52.607 118 117.5S390.171 514 325 514M144 245.5c0-27.338 22.384-49.5 50-49.5 27.613 0 50 22.162 50 49.5S221.613 295 194 295c-27.616 0-50-22.162-50-49.5M325 136c27.613 0 50 22.162 50 49.5S352.613 235 325 235c-27.615 0-50-22.162-50-49.5s22.385-49.5 50-49.5m337.937 185.483C659.72 142.518 511.194 0 331.61 0h-80.603C112.378 0 0 112.011 0 250.184v689.209C0 1040.796 82.475 1123 184.212 1123h66.796V750.227c0-51.423 41.822-93.11 93.415-93.11h66.83C552.84 638.817 663 498.771 663 328.559c0-2.366-.022-4.724-.063-7.076"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
