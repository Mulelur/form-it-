// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Row = styled.div`
  margin: 0.5rem;
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem 0.5rem;
`;

export const TitleWrapper = styled.div`
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 0.5rem;
  overflow: hidden;
  color: #333;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  pointer-events: none;
  text-overflow: ellipsis;
  transition: color 0.2s;
  white-space: nowrap;
`;

export const TitleSpan = styled.span`
  display: block;
`;

export const Input = styled.input`
  height: 26px;
  max-width: 8.9rem;
  padding: 0 5px 1px;
  color: #333;
  font-size: 12px;
  font-weight: 400;
  outline: none;
  border: none;
  background: none;
`;

export const InputLabel = styled.div`
  color: #999;
  font-size: 9px;
  line-height: 10px;
  pointer-events: none;
`;

export const NumberTicker = styled.div`
  position: absolute;
  top: 0;
  right: 0.42rem;
  bottom: 0;
  display: none;
  flex-direction: column;
  //   display: flex;
  align-self: stretch;
  justify-content: center;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid transparent;
  padding: 0 1rem 0 0.3rem;
  background: #f3f3f3;
  border-radius: 5px;
  color: #999;
  margin-right: 0.4rem;
  &:hover ${NumberTicker} {
    display: flex;
  }
  &: hover ${InputLabel} {
    opacity: 0;
  }
`;

export const InputDivider = styled.span`
  width: 0.1rem;
  background: #cccc;
  height: 1.8rem;
  margin-left: 0.3rem;
`;

export const TickerUp = styled.div`
  color: #999;
  cursor: pointer;
  transform: translateY(-1);
  transition: transform 0.2s ease, color 0.2s ease;
  will-change: transform;
`;

export const TickerDown = styled.div``;

export const PadLockWrapper = styled.div``;

export const PopupButtonWrapper = styled.div``;

export const SegmentedControl = styled.div`
  width: 13.4rem;
  height: 3rem;
  display: flex;
  overflow: visible;
  flex-direction: row;
  border: 1px solid transparent;
  background-color: #f3f3f3;
  border-radius: 5px;
  cursor: default;
  text-align: center;
  user-select: none;
`;

export const SegmentsWrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  align-content: stretch;
  align-items: center;
`;

export const SegmentedControlSegmentBackground = styled.div`
  height: 100%;
  width: 47%;
  position: absolute;
  top: 0.4px;
  right: 1px;
  bottom: 1px;
  left: 0;
  transition: left 0.4s;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 0 0 rgba(0, 0, 0, 0.05);
`;

export const Segment = styled.a`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  color: #999;
  color: ${({ color }) => color};
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  transition: color 0.2s;
  user-select: none;
`;

export const Divider = styled.div`
  width: 1px;
  height: 14px;
  background-color: #e3e3e3;
  border-radius: 2px;
  transition: opacity 0.2s;
`;

export const PopoutButton = styled.div`
  position: relative;
  display: flex;
  width: 62px;
  height: 26px;
  min-height: 26px;
  flex-direction: row;
  align-items: center;
  border: 1px solid transparent;
  background-color: #f3f3f3;
  border-radius: 5px;
  cursor: pointer;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  width: 13.5rem;
  flex-direction: row;
  background-color: #f3f3f3;
  border-radius: 5px;
  height: 26px;
  justify-content: space-between;
  padding: 0.3rem;
  border: 1px solid transparent;
  min-height: 26px;
  font-size: 1.2rem;
`;

export const IconWrapper = styled.div``;

export const CloseWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form``;

export const Color = styled.div`
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  position: absolute;
  inset: 0px;
  background-color: ${({ color }) => color};
  background: center center / cover no-repeat ${({ color }) => color};
  border-radius: 2px;
`;

export const Filter = styled.div`
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  position: absolute;
  inset: 0px;
  // background-color: ;
  border-radius: 2px;
`;

export const FusedNumberInputs = styled.div`
  position: relative;
  width: 13.4rem;
  display: flex;
  width: auto;
  height: 26px;
  flex-direction: row;
  border: 1px solid transparent;
  background: #f3f3f3;
  color: #999;
  margin-right: 0.4rem;
  border-radius: 5px 0 0 5px;
  margin-right: 1px;
  align-items: stretch;
`;

export const BoxColor = styled.div`
  position: relative;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 2px;
  overflow: hidden;
  cursor: pointer;
`;

export const RInput = styled.input`
  height: 26px;
  max-width: 3rem;
  padding: 0 8px 1px;
  border-radius: 5px;
  color: #333;
  font-size: 12px;
  font-weight: 400;
  outline: none;
  border: none;
  background: none;
`;

export const StackRow = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-end;
`;

export const TextInput = styled.input`
  height: 26px;
  max-width: 13.7rem;
  padding: 0 8px 1px;
  border-radius: 5px;
  color: #333;
  font-size: 12px;
  font-weight: 400;
  outline: none;
  border: none;
  background: none;
`;

export const Add = styled.div`
  height: 2.6rem;
  width: 48%;
  background-color: #fff;
  border-radius: 3px;
  color: #1fc4fa;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 0 0 rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Group = styled.div`
  padding: 0 0.9rem;
  border: 1px solid #ececed;
  border-radius: 0.3rem;
`;

export const GroupDivider = styled.div`
  height: 1px;
  background-color: #ececed;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 0.4rem;
`;

export const SliderWarper = styled.div`
  width: 7.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.7rem;
`;

export const ElementButtons = styled.button`
  border: 1px solid #e5e5e5;
  width: 100%;
  height: 3.3rem;
  border-radius: 5px;
  background-color: transparent;
  color: #d1c5c5;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem;
  &:hover {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 0 0 rgba(0, 0, 0, 0.05);
  }
  &:focus {
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  }
`;

export const Grid = styled.div`
  margin: 1rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
`;

export const Spacer = styled.div`
  margin: 0.3rem;
`;
