import styles from './styles.module.css';

type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      {/* condicao ? "se tiver label = verdadeiro" : "se nao tiver = falso" */}
      {/* {labelText ? <label htmlFor={id}>{labelText}</label> : ''} */}

      {/*condicao && valor(se tiver nada, IGNORA)*/}
      {/* {labelText && <label htmlFor={id}>{labelText}</label>} */}

      <label htmlFor={id}>{labelText}</label>
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
}
