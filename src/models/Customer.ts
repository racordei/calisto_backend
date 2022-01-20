import { DataTypes, Model } from 'sequelize'
import sequelizeConnection from '../config/database'

interface CustomerAttributes {
  customername: string
}

// CustomerIO = WorkorderInput | WorkorderOutput
// export interface CustomerIO
//   extends Optional<CustomerAttributes, 'customername'> {}
export interface CustomerIO extends Required<CustomerAttributes> {}

class Customer
  extends Model<CustomerAttributes, CustomerIO>
  implements CustomerAttributes
{
  declare customername: string
}

Customer.init(
  {
    customername: DataTypes.STRING,
  },
  {
    sequelize: sequelizeConnection,
  }
)

export default Customer
