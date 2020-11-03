import * as React from 'react';
import {
  ColumnsType, ColumnType,
  DefaultRecordType,



  ExpandableType,


  ExpandedRowRender, RenderExpandIcon,

  RowClassName, TableLayout,



  TriggerEventHandler
} from '../interface';

export interface BodyContextProps<RecordType = DefaultRecordType> {
  rowClassName: string | RowClassName<RecordType>;
  expandedRowClassName: RowClassName<RecordType>;

  columns: ColumnsType<RecordType>;
  flattenColumns: ColumnType<RecordType>[];

  componentWidth: number;
  tableLayout: TableLayout;
  fixHeader: boolean;
  fixColumn: boolean;
  horizonScroll: boolean;

  indentSize: number;
  expandableType: ExpandableType;
  expandRowByClick: boolean;
  expandedRowRender: ExpandedRowRender<RecordType>;
  expandIcon: RenderExpandIcon<RecordType>;
  onTriggerExpand: TriggerEventHandler<RecordType>;
  expandIconColumnIndex: number;
}

export const BodyContext = React.createContext<BodyContextProps>(null);

