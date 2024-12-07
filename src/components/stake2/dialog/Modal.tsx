import close from '@/assets/stake/close.svg';
import { useDialogContext } from "@/providers/DialogProvider";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ConfirmButton from "./ConfirmButton";
import { LockStatus, StakeInfo } from '@/hooks/wallet';
import { useWalletContext } from '@/providers/WalletProvider';
import { message, Modal } from 'antd';

const TopBox = styled.div`
    position: relative;
    width: 100%;
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
        top: -0.7rem;
        right: 0;
        cursor: pointer;
    }
`

const NetBox = styled.div`
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

const ConfirmButtonBox = styled.div`
    width: 100%;
    margin-top: 2.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

interface DialogProps {
    visible: boolean;
    onClose: () => void;
    onOk: () => void;
}


export default function AntdModal(props: DialogProps) {

    const { showingStakeItem } = useDialogContext()
    const { blockTimestamp, getPenaltyAmount, unstakeNet, requestData, penaltyPercent } = useWalletContext()
    const [loading, setLoading] = useState<boolean>(false)

    const closeDialog = () => {
        props.onClose();
    };

    const getRemainingDays = (item: StakeInfo | undefined): string => {
        if (item && item.withdrawStatus === LockStatus.STAKING) {
            const remainingTime = Math.max(item.lockTimestamp - blockTimestamp, 0)
            return `${Math.floor(remainingTime * Number(import.meta.env.VITE_TIME_MULTIPLIER) / (24 * 60 * 60 * 1000))}`
        }
        return '0'
    }

    const unstake = async () => {
        const item = showingStakeItem
        if (!item) {
            closeDialog()
            return
        }
        setLoading(true)
        try {
            await unstakeNet(item.index)
            await requestData()
            closeDialog()
        } catch (e) {
            console.error(e)
            message.error(e.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Modal
            centered
            open={props.visible}
            onOk={() => props.onOk()}
            onCancel={() => props.onClose()}
            width={600}
            height={602}
            footer={null}
            className="custom-modal"
            maskClosable={false}
            maskStyle={{ backgroundColor: '#0B142B80' }}
            
        >
            <TopBox>
                <h2>Unstake</h2>
                <img className="close" onClick={closeDialog} src={close} alt="" />
            </TopBox>
            <NetBox>
                <div className="net-info">
                    <p>NET</p>
                    <p>{showingStakeItem?.lockBalance} NET</p>
                </div>
                <p className="net-desc">Remaining Days: {getRemainingDays(showingStakeItem)} Days</p>
            </NetBox>
            <UnstakeBox>
                <h6 className="unstake">Unstake Now</h6>
                <div className="list-box">
                    <div className="info-box">
                        <p>Earned rewards will be canceled</p>
                        <p>{showingStakeItem?.rewardBalance} NET</p>
                    </div>
                    <div className="info-box">
                        <p>Early termination fee applies</p>
                        <p>{getPenaltyAmount(showingStakeItem?.lockBalance ?? "0")} NET</p>
                    </div>
                    <div className="info-box">
                        <p></p>
                        <p className={"desc"}>{showingStakeItem?.lockBalance}*{penaltyPercent}% NET</p>
                    </div>
                </div>
            </UnstakeBox>
            <ConfirmButtonBox>
                <ConfirmButton text="Confirm Unstaking" onClick={unstake} loading={loading}/>
            </ConfirmButtonBox>
        </Modal>
    );
}
