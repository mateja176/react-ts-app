import * as React from "react";
import { connect } from "react-redux";
import { increment } from "./store/actions/count";
import { selectCount, State } from "./store/reducer";
export interface FormProps {
  count: number;
  increment: () => void;
}

export const Form: React.SFC<FormProps> = ({ count, increment }) => (
  <form
    onSubmit={e => {
      e.preventDefault();

      increment();
    }}
  >
    <fieldset>
      <label>
        Count:
        <input readOnly value={count} />
      </label>
      <input type="submit" value="Increment!" />
    </fieldset>
  </form>
);

export const mapStateToProps = (state: State) => ({
  count: selectCount(state),
});

export default connect(
  mapStateToProps,
  { increment },
)(Form);
