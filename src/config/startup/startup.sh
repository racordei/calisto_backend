echo
echo "================================================="
echo "** Calling sequelize db:migrate"

# echo "  -- Waiting db connection: ($MARIADB_HOSTNAME:$MYSQL_TCP_PORT)..."
# /usr/app/src/config/wait-for-it.sh $MARIADB_HOSTNAME:$MYSQL_TCP_PORT -s -t 20 -- npx sequelize db:migrate

DbMigrate() {
  npx sequelize db:migrate
}

sleep 5s
while ! DbMigrate
do
  echo "Waiting 2s before trying to execute sequelize migrations again..."
  sleep 5s
done

echo "** Finished calling sequelize db:migrate"
echo "================================================="