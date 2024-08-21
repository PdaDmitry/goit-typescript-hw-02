import css from './ErrorMessage.module.css';

export default function ErrorMessage():React.ReactElement {
  return (
    <div>
      <p className={css.errorText}>
        Whoops, something went wrong! Please try reloading this page! 🤔
      </p>
    </div>
  );
}
