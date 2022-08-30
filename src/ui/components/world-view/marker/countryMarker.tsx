type Props = {
  officialName: string;
};

export const CountryMarker = ({ officialName }: Props) => (
  <div>{officialName}</div>
);
