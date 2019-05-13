const mediaScreen = '@media screen';

const minWidth = x => `(min-width: ${x}px)`;
const minHeight = x => `(min-height: ${x}px)`;

export const breakpoints = {
  sm: `${mediaScreen} and ${minWidth(480)}`,
  md: `${mediaScreen} and ${minWidth(768)}`,
  t1: `${mediaScreen} and ${minHeight(1024)} and ${minWidth(768)}`,
  lg: `${mediaScreen} and ${minWidth(940)}`,
  t2: `${mediaScreen} and ${minHeight(1200)} and ${minWidth(940)}`,
  xl: `${mediaScreen} and ${minWidth(1440)}`,
  uw: `${mediaScreen} and ${minWidth(2048)}`,
  t3: `${mediaScreen} and ${minHeight(1536)}`,
  t4: `${mediaScreen} and ${minHeight(2028)}`
};
