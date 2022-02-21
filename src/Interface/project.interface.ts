export interface TextStyle {
  display: string;
  fontFamily: string;
  fontStyle: string;
  textAlign: 'left' | 'right' | 'center';
  color: string;
  padding: string;
  margin: string;
  fontSize: number;
  transform: string;
  top: number;
  left: number;
  fontWeight: string;
  filter: string;
  textShadow: string;
}

export interface PageStyle {
  width: string;
  height: string;
  overflow: string;
  padding: string;
  margin: string;
  background: string;
  backgroundSize: string;
  display: 'flex' | ' block';
  flexDirection:
    | 'column'
    | 'column-reverse'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'row'
    | 'row-reverse'
    | 'unset';
  justifyContent:
    | 'center'
    | 'flex-end'
    | 'flex-start'
    | 'letter-spacing'
    | 'space-between';
  alignItems:
    | 'center'
    | 'flex-end'
    | 'flex-start'
    | 'letter-spacing'
    | 'space-between';
  position: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky';
}

export interface ButtonStyle {
  fontFamily: string;
  fontWeight: string;
  cursor: string;
  transitionDuration: string;
  transitionProperty: string;
  transitionTimingFunction: string;
  outline: string;
  border: string;
  margin: string;
  boxShadow: string;
  padding: string;
  minHeight: string;
  backgroundColor: string;
  color: string;
  borderRadius: string;
}

export interface LabelStyles {
  fontSize: string;
  fontWeight: string;
  color: string;
  marginBottom: string;
  padding: string;
  margin: string;
}
export interface GroupStyle {
  padding: string;
  margin: string;
  height: string;
  width: string;
  borderRadius: string;
  background: string;
  flexDirection:
    | 'column'
    | 'column-reverse'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'row'
    | 'row-reverse'
    | 'unset';
  display: 'flex' | ' block';
  justifyContent:
    | 'center'
    | 'flex-end'
    | 'flex-start'
    | 'letter-spacing'
    | 'space-between';
  alignItems:
    | 'center'
    | 'flex-end'
    | 'flex-start'
    | 'letter-spacing'
    | 'space-between';
  position: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky';
}

export interface InputStyle {
  display: string;
  borderColor: string;
  outLineColor: string;
  padding: string;
  borderRadius: string;
  fontSize: string;
  width: string;
  height: string;
  top: number;
  left: number;
  transform: string;
  lineHeight: string;
  color: string;
  outline: string;
  margin: string;
  background: string;
  flexRow: string;
  verticalAlign: string;
  backgroundColor: string;
  backgroundClip: string;
  border: string;
  boxShadow: string;
  transition: string;
  position: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky';
  flexDirection:
    | 'column'
    | 'column-reverse'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'row'
    | 'row-reverse'
    | 'unset';
}

export type HTMLElement = {
  id?: string;
  module?: string;
  value?: string;
  styles: TextStyle | InputStyle | ButtonStyle | LabelStyles;
  type: string;
  editebule: boolean;
};

export type Group = {
  id?: string;
  module?: string;
  styles: GroupStyle;
  children?: HTMLElement[];
  type: string;
  editebule: boolean;
};

export type Component = {
  id?: string;
  module?: string;
  children?: HTMLElement[] | Component[];
  type: string;
  editebule: boolean;
};

export type Page = {
  id: string;
  module?: string;
  styles: PageStyle;
  children: Group[];
  type: string;
  editebule: boolean;
};
