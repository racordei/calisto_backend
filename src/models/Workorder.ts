import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config/database'

interface WorkorderAttributes {
  customername: string
  inputfilename: string
  batchname: string
  hexid: string
  productname: string
  productalias: string
  producttype: number
  productstatus: string
  additionalhexid: string
  creationdate: Date
  duedate: Date
  finisheddate: Date
  shippingdate: Date
  comments: string
  wo_status: number
  quantity: number
  priorityquantity: number
  excludedquantity: number
  mainplastic: string
  planningid: string
  packageid: string
  sequenceinpackage: number
  processstartdate: Date
  processenddate: Date
  processcosttime: string
  initcmfdate: Date
  initcmfinfo: string
  matchingstartdate: Date
  matchingenddate: Date

  createdAt?: Date
  modifiedAt?: Date
}

// WorkorderIO = WorkorderInput | WorkorderOutput
export interface WorkorderIO
  extends Optional<
    WorkorderAttributes,
    'batchname' | 'priorityquantity' | 'excludedquantity'
  > {}
// export interface WorkorderOutput extends Required<WorkorderAttributes>{}

class Workorder
  extends Model<WorkorderAttributes, WorkorderIO>
  implements WorkorderAttributes
{
  declare customername: string
  declare inputfilename: string
  declare batchname: string
  declare hexid: string
  declare productname: string
  declare productalias: string
  declare producttype: number
  declare productstatus: string
  declare additionalhexid: string
  declare creationdate: Date
  declare duedate: Date
  declare finisheddate: Date
  declare shippingdate: Date
  declare comments: string
  declare wo_status: number
  declare quantity: number
  declare priorityquantity: number
  declare excludedquantity: number
  declare mainplastic: string
  declare planningid: string
  declare packageid: string
  declare sequenceinpackage: number
  declare processstartdate: Date
  declare processenddate: Date
  declare processcosttime: string
  declare initcmfdate: Date
  declare initcmfinfo: string
  declare matchingstartdate: Date
  declare matchingenddate: Date

  // timestamps
  declare readonly createdAt: Date
  declare readonly modifiedAt: Date
}

Workorder.init(
  {
    customername: DataTypes.STRING,
    inputfilename: DataTypes.STRING,
    batchname: {
      allowNull: true,
      type: DataTypes.STRING,
      defaultValue: null, // col('inputfilename')
    },
    hexid: {
      primaryKey: true,
      type: DataTypes.STRING,
    },
    productname: DataTypes.STRING,
    productalias: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    producttype: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    productstatus: {
      type: DataTypes.STRING,
      defaultValue: 'I',
    },
    additionalhexid: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    creationdate: DataTypes.DATE,
    duedate: DataTypes.DATE,
    finisheddate: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
    shippingdate: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
    comments: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    wo_status: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    priorityquantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    excludedquantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    mainplastic: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    planningid: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    packageid: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    sequenceinpackage: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    processstartdate: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
    processenddate: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
    processcosttime: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    initcmfdate: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
    initcmfinfo: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    matchingstartdate: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
    matchingenddate: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
  },
  {
    sequelize: sequelizeConnection,
    tableName: 'production_status',
  }
)

// sequelizeConnection.sync()

export default Workorder
