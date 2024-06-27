/** @jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import MainSidebarBody from "./MainSidebarBody/MainSidebarBody";
import MainSidebarHeader from "./MainSidebarHeader/MainSidebarHeader";
import * as s from "./style";
import { mainsidebarShowAtom } from "../../atoms/mainSidevarShowAtom";

function MainSidebar() {
    const  [mainSideberShow] = useRecoilState(mainsidebarShowAtom);
    return (
        <div css={s.layout(mainSideberShow)}>
            <MainSidebarHeader />
            <MainSidebarBody />
        </div>
    );
}

export default MainSidebar;