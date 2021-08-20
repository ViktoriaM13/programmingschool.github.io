import { NavLink } from 'react-router-dom';
import awsicon from '../../../img/АДМИНИСТРИРОВАНИЕ WINDOWS SERVER(4).svg'

const AWS = () => {
    return(
        <div className="container cours">

            <div className="row d-flex align-items-center justify-content-between crs-mr">
                <div className="col align-items-center">
                    <h3 className="h1">АДМИНИСТРИРОВАНИЕ WINDOWS SERVER</h3>
                    <h3 className="lead">50 000р.</h3>
                </div>

                <div className="col img-right">
                    <img src={ awsicon } width="250" className="img-fluid" alt={ awsicon } />
                </div>
            </div>
            
            <p className="lead">
                Данный курс будет полезен как новичкам, так и давно работающим с этой системой специалистам, которые получат возможность повысить свою квалификацию и узнать новую информацию.
           </p>

            <h4>В программу курса входит:</h4>

            <ul className="lead stnone">
                <li key={Math.random()}><strong>1. Знакомство операционной системой Windows Server</strong></li>
                <li key={Math.random()}>1.1. Обзор семейства ОС Windows Server , новые возможности ОС</li>
                <li key={Math.random()}>1.2. Домены и рабочие группы в сетях Windows Server</li>
                <li key={Math.random()}>1.3. Подготовка к установке ОС Windows Server</li>
                <li key={Math.random()}>1.4. Различные варианты установки ОС, разрешение проблем</li>
            </ul>

            <ul className="lead stnone">
                <li key={Math.random()}><strong>2. Установка ОС Windows Server</strong></li>
                <li key={Math.random()}>2.1. Установка Windows Server</li>
                <li key={Math.random()}>2.2. Основы безопасности Windows Server, вход в сеть</li>
                <li key={Math.random()}>2.3. Диалоговое окно Windows Security</li>
                <li key={Math.random()}>2.4. Сетевые службы, протоколы. Основы сетей TCP/IP</li>
            </ul>

            <ul className="lead stnone">
                <li key={Math.random()}><strong>3. Инструментарий администратора Windows Server</strong></li>
                <li key={Math.random()}>3.1. Панель управления</li>
                <li key={Math.random()}>3.2. Использование консоли управления ММС</li>
                <li key={Math.random()}>3.3. Создание настраиваемой консоли ММС</li>
                <li key={Math.random()}>3.4. Работа с планировщиком заданий (Task Scheduler)</li>
            </ul>

            <ul className="lead stnone">
                <li key={Math.random()}><strong>4. Настройка ОС Windows Server</strong></li>
                <li key={Math.random()}>4.1. Ручная и автоматическая установка оборудования</li>
                <li key={Math.random()}>4.2. Настройка и оптимизация параметров ОС</li>
                <li key={Math.random()}>4.3. Сцена Работа с несколькими мониторами</li>
                <li key={Math.random()}>4.4. Профили оборудования. Стыковочные станции</li>
                <li key={Math.random()}>4.5. Практикум 3. Настройка рабочего стола, работа с файлом подкачки</li>
            </ul>

            <ul className="lead stnone">
                <li key={Math.random()}><strong>5. Учетные записи пользователей и групп</strong></li>
                <li key={Math.random()}>5.1. Типы учетных записей пользователей и групп</li>
                <li key={Math.random()}>5.2. Планирование и создание учетных записей</li>
                <li key={Math.random()}>5.3. Администрирование учетных записей, шаблоны</li>
                <li key={Math.random()}>5.4. Политики безопасности учетных записей</li>
                <li key={Math.random()}>5.5. Работа с учетными записями пользователей и групп</li>
            </ul>

            <ul className="lead stnone">
                <li key={Math.random()}><strong>6. Управление жесткими дисками в Windows Server</strong></li>
                <li key={Math.random()}>6.1. Базовые и динамические диски</li>
                <li key={Math.random()}>6.2. Файловые системы FAT, FAT32, NTFS</li>
                <li key={Math.random()}>6.2. Типы томов, задачи по управлению дисками в Windows Server</li>
                <li key={Math.random()}>6.3. Работа с динамическими дисками</li>
            </ul>

            <ul className="lead stnone">
                <li key={Math.random()}><strong>7. Сетевые протоколы Windows Server</strong></li>
                <li key={Math.random()}>7.1. Протокол TCP/IP. Конфигурация и утилиты</li>
                <li key={Math.random()}>7.2. Протокол NWLink. Другие протоколы</li>
                <li key={Math.random()}>7.3. Сетевые привязки. Настройка привязок</li>
                <li key={Math.random()}>7.4. Практикум 6. Установка и настройка сетевых протоколов</li>
            </ul>

            <ul className="lead stnone">
                <li key={Math.random()}><strong>8. Разрешение имен в Windows Server</strong></li>
                <li key={Math.random()}>8.1. Процесс разрешения имен DNS</li>
                <li key={Math.random()}>8.2. Процесс разрешения имен Net BIOS</li>
                <li key={Math.random()}>8.3. Сервера DNS и WINS. Файлы Hosts и LMHosts</li>
                <li key={Math.random()}>8.4. Конфигурирование клиентов DNS и WINS</li>
            </ul>

            <ul className="lead stnone">
                <li key={Math.random()}><strong>9. Печать в Windows Server</strong></li>
                <li key={Math.random()}>9.1. Основы печати в Windows Server, терминология</li>
                <li key={Math.random()}>9.2. Установка принтеров, задание приоритетов печати</li>
                <li key={Math.random()}>9.3. Установка сетевого принтера</li>
                <li key={Math.random()}>9.4. Настройка сетевых принтеров, предоставление общего доступа</li>
                <li key={Math.random()}>9.5. Разрешение проблем печати</li>
            </ul>

            <ul className="lead stnone">
                <li key={Math.random()}><strong>10.Ограничение доступа с помощью разрешений NTFS</strong></li>
                <li key={Math.random()}>10.1. Использование и назначение разрешений NTFS</li>
                <li key={Math.random()}>10.2. Специальные разрешения, список контроля доступа</li>
                <li key={Math.random()}>10.3. Объединение разрешений NTFS</li>
                <li key={Math.random()}>10.4. Копирование и перемещение файлов и папок на томах NTFS</li>
                <li key={Math.random()}>10.5. Работа с разрешениями NTFS</li>
            </ul>

            <ul className="lead stnone">
                <li key={Math.random()}><strong>11. Работа с общими папками в Windows Server</strong></li>
                <li key={Math.random()}>11.1. Планирование и открытие доступа к общим папкам</li>
                <li key={Math.random()}>11.2. Разрешение на доступ к ОП, кэширование</li>
                <li key={Math.random()}>11.3. Использование автономных файлов и папок</li>
                <li key={Math.random()}>11.4. Сочетание разрешений NTFS и общих папок</li>
                <li key={Math.random()}>11.5. Работа с общими папками</li>
            </ul>

            <ul className="lead stnone">
                <li key={Math.random()}><strong>12. Аудит ресурсов и событий</strong></li>
                <li key={Math.random()}>12.1. Понятие аудита, категории аудита</li>
                <li key={Math.random()}>12.2. Планирование и применение аудита</li>
                <li key={Math.random()}>12.3. Просмотр журналов событий при помощи Event Viewer</li>
                <li key={Math.random()}>12.4. Работа с Event Viewer</li>
            </ul>

            <ul className="lead stnone">
                <li key={Math.random()}><strong>13. Управление хранилищами данных</strong></li>
                <li key={Math.random()}>13.1. Возможности сжатия и шифрования данных на томах NTFS</li>
                <li key={Math.random()}>13.2. Сертификаты, сертифицирующие органы, агенты восстановления</li>
                <li key={Math.random()}>13.3. Квотирование дискового пространства</li>
                <li key={Math.random()}>13.4. Дефрагментация дисков при помощи Disk Defragmentator</li>
                <li key={Math.random()}>13.5. Работы по управлению хранилищами данных</li>
            </ul>

            <ul className="lead stnone">
                <li key={Math.random()}><strong>14. Резервное копирование данных</strong></li>
                <li key={Math.random()}>14.1. Архивация и восстановление данных</li>
                <li key={Math.random()}>14.3. Практикум 13. Работа с программой Backup</li>
                <li key={Math.random()}>14.4. Мониторинг доступа к ресурсам</li>
                <li key={Math.random()}>14.5. Служебная утилита System Performance</li>
            </ul>

            <ul className="lead stnone">
                <li key={Math.random()}><strong>15. Служба удаленного доступа в Windows Server</strong></li>
                <li key={Math.random()}>15.1. Конфигурирование удаленного доступа в Windows Server</li>
                <li key={Math.random()}>15.2. Протоколы удаленного доступа</li>
                <li key={Math.random()}>15.3. Настройка входящих и исходящих подключений при помощи Мастера сетевых подключений</li>
                <li key={Math.random()}>15.4. Установка и настройка RRAS</li>
            </ul>

            <ul className="lead stnone">
                <li key={Math.random()}><strong>16. Дополнительные возможности загрузки Windows Server</strong></li>
                <li key={Math.random()}>16.1. Процесс загрузки Windows Server</li>
                <li key={Math.random()}>16.2. Создание загрузочного диска Windows Server</li>
                <li key={Math.random()}>16.3. Расширенные возможности загрузки</li>
                <li key={Math.random()}>16.4. Варианты установки ОС Windows Server</li>
                <li key={Math.random()}>16.5. Установка ОС Windows Server</li>
            </ul>
            
            <p className="lead">
                Занятия проходят в удобное для ученика и преподавателя время (пару раз в неделю по 2-3 часа). Расписание составляется при заключении договора. Вы обучаетесь в малокомплектной группе (до 5 человек), начать обучение можно любой момент, как только Вы будете готовы приступить к занятиям. По окончанию курса Вас ожидает выпускной экзамен, Сертификат который котируется у работодателей, а так же пожизненная тех поддержка от вашего преподавателя и помощь в трудоустройстве!
            </p>

            <p className="lead">
                Для расчета стоимости выберите вариант который Вам подходит: индивидуальные занятия 1500 руб / 1 ак час или групповые 1000 руб / 1 ак час - и умножьте стоимость на общее количество академических часов данного курса. Оплата возможна в 2 части.
            </p>
            
            <p className="lead">
                Курс рассчитан на 84 академических часов. Длительность 4-6 месяцев (при посещении 3 занятия в неделю по 3 академических часа - график можно обсудить на собеседовании/тестировании в школе).
            </p>

            <p className="lead">
                online: занятия дистанционно<br />
                offline: занятия с посещением школы
            </p>

            <NavLink to="/Cours"><button className="btn btn-danger btn-lg">Назад</button></NavLink>

        </div>
    )
}

export default AWS;