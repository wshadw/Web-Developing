using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using RoachFrontend.Models;

namespace RoachFrontend.Services
{
    public class LoginService : IDisposable
    {
        private SqlConnection conn;
        /// <summary>
        /// 
        /// </summary>
        /// <param name="connectionString">Строка соединения</param>
        public LoginService(string connectionString)
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

        public bool CheckUser(UserSignIn user)
        {
            try
            {
                using (var da = new SqlDataAdapter("SELECT UserID FROM TarakaniyBeg.dbo.UsersAcc WHERE UserID='" + user.UserId + "' AND Password='" + user.Password + "'", conn))
                {
                    var data = new DataTable();
                    da.Fill(data);
                    return data.Rows != null && data.Rows.Count != 0;
                }
            }
            catch
            {
                return false;
            }
        }

        public void AddUser(UserAcc userAcc)
        {
            using (var da = new SqlDataAdapter("SELECT * FROM TarakaniyBeg.dbo.UsersAcc", conn))
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
                DataRow row = data.Rows.Find(userAcc.UserId);//Поищем строку по первичному ключу
                if (row == null) // Строки нет, создадим её
                {
                    row = data.NewRow();
                    row["UserID"] = userAcc.UserId;//Нужно установить первичный ключ
                    data.Rows.Add(row);
                }
                //Установим св-ва
                row["Password"] = userAcc.Password; //установка/обновление пароля
                row["Email"] = userAcc.Email; //установка/обновление пароля
                //Обновим БД
                try{da.Update(data);}
                catch { }
            } 
        }
    }
}