import { FC, ReactNode } from 'react';

export type InfoProps = {
  title?: string;
  msg?: string | ReactNode;
};

const Info: FC<InfoProps> = ({ title, msg }) => (
  <div className="alert alert-info" role="alert">
    <h5 className="alert-heading">{title || 'Ups!'}</h5>
    <div>{msg || <p>Seem that no data are available right now.</p>}</div>
    <hr />
  </div>
);

export default Info;
