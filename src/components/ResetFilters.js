import React from 'react';
import { pure } from 'recompose';
import ResetIcon from '@material-ui/icons/SettingsBackupRestore';

const Filters = ({reset}) => {
  return (
    <div className="filters-action" onClick={()=>reset()} aria-label="Reset Filters">
      <ResetIcon /><span>Reset Filters</span>
    </div>
  );
};
export default pure(Filters);
