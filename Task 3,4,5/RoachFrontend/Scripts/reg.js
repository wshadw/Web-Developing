function SignIn() {
                //var textErr = getElementById("textErr");
                var UserName = document.getElementById("UserName");
                var UserPass = document.getElementById("UserPass");
                var UserPass2 = document.getElementById("UserPass2");
                var UserEmail = document.getElementById("UserEmail");
                textErr.innerHTML = " ";
                var tempstr = UserEmail.value.toString();
                if (UserName.value == "" || UserName.value == " ") { textErr.innerHTML = "Введите имя пользователя!"; return; }
                else if (UserPass.value == "" || UserPass.value == " ") { textErr.innerHTML = "Введите пароль!"; return; }
                else if (UserPass2.value == "" || UserPass2.value == " ") { textErr.innerHTML = "Введите пароль повторно!"; return; }
                else if (UserPass.value != UserPass2.value) { textErr.innerHTML = "Пароли не совпадают!"; return; }
                else if (UserPass.value.length < 5) { textErr.innerHTML = "Пароль слишком простой!"; return; }
                else if (UserPass.value == UserName.value) { textErr.innerHTML = "Пароль и имя не могут совпадать!"; return; }
                else if (UserEmail.value == "" || UserEmail.value == " ") { textErr.innerHTML = "Введите email!"; return; }
                if (!(tempstr.indexOf(".") + 1) || !(tempstr.indexOf("@") + 1) || tempstr.length<8) { textErr.innerHTML = "Ошибка в email!"; return; }
                Ext.Ajax.request({
                    url: '/Home/AddUser',
                    method: 'POST',
                    params: {
                        data: Ext.encode({
                            user: UserName.value,
                            password: UserPass.value,
                            email: UserEmail.value
                        })
                    },
                    success: function (response) {
                        alert("Регистрация прошла успешно.");
                        window.location.href = "/Home/Index";
                    }
                }); }