import React from 'react';
import { Form } from 'antd';
import omit from 'object.omit';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-cycle
import DataTable, { Oper } from './DataTable';

const EditableContext = React.createContext();

const Editable = Form.create()(({ form, ...props }) => (
  <EditableContext.Provider value={form}>
    <DataTable {...props} />
  </EditableContext.Provider>
));

/**
 * Repacking Oper in order to pass form to subcomponent
 * E.g
 *  <EditableOper>
      {
        form => <a onClick={e => onSave(form)}>Preservation</a>
      }
    </EditableOper>
 */
const EditableOper = props => (
  <EditableContext.Consumer>
    {form => <Oper>{props.children(form)}</Oper>}
  </EditableContext.Consumer>
);

EditableOper.propTypes = {
  children: PropTypes.func,
};

/**
 * Editable component
 * Change the presentation of the current table Cell by returning a component
 * @param text The text content in the current cell
 * @param record [Object] Contains a row of data for the current cell
 * @param field [Object] This column in the columns
 * @param field.tableItem.editing [Function] Use functions to support specified cell application types that satisfy the condition
 */
class EditableCell extends React.Component {
  componentDidMount() {
    // Reset the form item, otherwise it will bring the value to the next line
    const { record, field } = this.props;
    if (record && record[field.name]) {
      this.form.setFieldsValue({
        [field.name]: record[field.name]
      });
    }
  }

  render() {
    const { record, text, field } = this.props;
    const { tableItem } = field;
    const { type } = tableItem;

    return (
      <EditableContext.Consumer>
        {form => {
          if (!form) {
            // console.warn('Please use Editable instead of DataTable');
            return text;
          }
          if (!this.form) this.form = form;
          let formProps = {
            form,
            name: field.name,
            title: field.title,
            record,
            ...tableItem
          };
          if (field.dict) {
            formProps.dict = field.dict;
          }
          formProps = omit(formProps, ['editing', 'render']);
          return (
            <Form.Item help={false}>
              {/* eslint-disable-next-line global-require */}
              {require(`../Form/model/${type.toLowerCase()}`).default(
                formProps
              )}
            </Form.Item>
          );
        }}
      </EditableContext.Consumer>
    );
  }
}

EditableCell.propTypes = {
  record: PropTypes.object,
  field: PropTypes.object,
  text: PropTypes.any,
};

export { Editable, EditableCell, EditableOper };
