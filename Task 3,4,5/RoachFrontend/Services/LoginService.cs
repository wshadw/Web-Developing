using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using RoachFrontend.Models;

namespace RoachFrontend.Services
{
    public class StatService : IDisposable
    {
        private SqlConnection conn;
        /// <summary>
        /// 
        /// </summary>
        /// <param name="connectionString">Строка соединения</param>
        public StatService(string connectionString)
        {
            //Соединение с БД
            conn = new SqlConnection(connectionString);
            conn.Open();
        }

        public void Dispose()
        {
            if (conn != null)
            {
                conn.Dispose();
            }
        }

        public IEnumerable<UserStat> GetStatistics()
        {
            using (var da = new SqlDataAdapter("SELECT * FROM dbo.UserStat", conn))
            {
                //Объект для записи данных
                var data = new DataTable();
                //Заполняем объект данными
                da.Fill(data);
                //Перебираем все строки в таблице, и для каждой строки создайм соответвующий объект
                foreach (DataRow row in data.Rows)
                {
                    yield return new UserStat
                    {
                        UserId = row["UserId"].ToString(),
                        Money = (int) row["Money"]
                    };
                }
            }
        }

        public void AddStat(UserStat userStat)
        {
            using (var da = new SqlDataAdapter("SELECT * FROM dbo.UserStat", conn))
            {
                da.MissingSchemaAction = MissingSchemaAction.AddWithKey; // Для получения метаинформации из БД
                //Объект, который сгенерирует команды встави и обновления
                var b = new SqlCommandBuilder(da);
                //Объект для записи данных
                var data = new DataTable();
                //Заполняем объект данными
                da.Fill(data);
               //Возможны два сценария:
               //1. Строка уже есть в БД, тогда её нужно обновить
               //2. Строки нет в БД, тогда её нужно создать
                DataRow row = data.Rows.Find(userStat.UserId);//Поищем строку по первичному ключу
                if (row == null) // Строки нет, создадим её
                {
                    row = data.NewRow();
                    row["UserID"] = userStat.UserId;//Нужно установить первичный ключ
                    data.Rows.Add(row);
                }
                //Установим св-ва
                row["Money"] = (int)row["Money"] + userStat.Money;
                //Обновим БД
                da.Update(data);
            } 
        }
    }
}