import close from '@/assets/stake/close.svg';
import { useDialogContext } from "@/providers/DialogProvider";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import ConfirmButton from "./ConfirmButton";

interface DialogProps {
    onClose: () => void;
    onOk: () => void;
}

export default function Dialog(props: DialogProps) {
    const dialogRef = useRef<null | HTMLDialogElement>(null);
    useEffect(() => {
        dialogRef.current?.showModal();
    }, []);

    const {setShowDialog} = useDialogContext()

    const closeDialog = () => {
        dialogRef.current?.close();
        setShowDialog(false)
        props.onClose();
    };

    const Wrapper = styled.dialog`
        &::backdrop {
            background: rgba(0, 0, 0, 0.4);
        }
        &:-webkit-scrollbar {
            display: none;
        }
        width: 600px;
        height: 602px;
        display: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid #1E1E1E;
        backdrop-filter: blur(27.182817459106445px);
        background-color: #0B142B;
        border-radius: 16px;
        padding: 2rem;
        overflow: auto;
        .top-box {
            position: relative;
            h2 {
                width: 100%;
                font-family: Inter;
                font-size: 24px;
                font-weight: 400;
                line-height: 16px;
                text-align: center;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
                color: white;
                margin-top: 0.6rem;
            }
            img {
                position: absolute;
                top: 0;
                right: 0;
                cursor: pointer;
            }
        }
        .net-box {
            padding: 1.7rem 2rem;
            background-color: #1212121F;
            border: 1px solid #01A9C4;
            border-radius: 24px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: start;
            margin-top: 2.5rem;
            .net-info {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                p {
                    font-family: Inter;
                    font-size: 16px;
                    font-weight: 300;
                    line-height: 19.36px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    color: white;
                    width: auto;
                }
                &>p:nth-child(1) {
                    text-align: left;
                }
                &>p:nth-child(2) {
                    text-align: right;
                }
            }
            .net-desc {
                font-family: Inter;
                font-size: 16px;
                font-weight: 300;
                line-height: 19.36px;
                text-align: left;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
                opacity: 0.5;
                margin-top: 0.6rem;
                color: white;
            }
        }
        .confirm-button-box {
            width: 100%;
            margin-top: 2.2rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }

    `

    const UnstakeBox = styled.div`
        padding: 2rem 2rem 3.2rem 2rem;
        background-color: #1212121F;
        border: 1px solid #01A9C4;
        border-radius: 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: start;
        margin-top: 1.7rem;
        width: 100%;
        h6 {
            border-bottom: 1px solid #FFFFFF33;
            width: 100%;
            padding-bottom: 1.5rem;
            font-family: Inter;
            font-size: 20px;
            font-weight: 400;
            line-height: 24.2px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: white;
        }
        .list-box {
            width: 100%;
            .info-box {
                margin-top: 1.5rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                p {
                    font-family: Inter;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 19.36px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    color: white;
                }
            }
        }

    `

    return (
        <Wrapper ref={dialogRef}>
            <div className="top-box">
                <h2>Unstake</h2>
                <img className="close" onClick={closeDialog} src={close} alt="" />
            </div>
            <div className="net-box">
                <div className="net-info">
                    <p>NET</p>
                    <p>500.00 NET</p>
                </div>
                <p className="net-desc">Remaining Days: 2 Days</p>
            </div>
            <UnstakeBox>
                <h6 className="unstake">Unstake Now</h6>
                <div className="list-box">
                    <div className="info-box">
                        <p>Earned rewards will be canceled</p>
                        <p>25.00 NET</p>
                    </div>
                    <div className="info-box">
                        <p>Early termination fee applies</p>
                        <p>50.00 NET</p>
                    </div>
                </div>
            </UnstakeBox>
            <div className="confirm-button-box">
                <ConfirmButton text="Confirm Unstaking"/>
            </div>
        </Wrapper>
    );
}
