<?xml version="1.0" ?><!DOCTYPE TS><TS language="ru" version="2.1">
<context>
    <name>AppSettings</name>
    <message>
        <location filename="../../src/appsettings.cpp" line="71"/>
        <source>Unable to create autorun file from &apos;%1&apos;</source>
        <translation>Не удалось создать файл автозапуска из &apos;%1&apos;</translation>
    </message>
</context>
<context>
    <name>OptimusManager</name>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="50"/>
        <location filename="../../src/optimusmanager.cpp" line="192"/>
        <source>Switch to Intel</source>
        <translation>Переключить на Intel</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="51"/>
        <location filename="../../src/optimusmanager.cpp" line="193"/>
        <source>Switch to Nvidia</source>
        <translation>Переключить на Nvidia</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="53"/>
        <location filename="../../src/optimusmanager.cpp" line="194"/>
        <source>Exit</source>
        <translation>Выход</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="61"/>
        <location filename="../../src/optimusmanager.cpp" line="189"/>
        <source>Current videocard: </source>
        <translation>Текущая видеокарта: </translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="170"/>
        <location filename="../../src/optimusmanager.cpp" line="180"/>
        <source>The specified icon &apos;%1&apos; for the current GPU is invalid. The default icon will be used.</source>
        <translation>Выбранный значок &apos;%1&apos; для текущего GPU недействителен. Будет использован значок по умолчанию.</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="208"/>
        <source>You are about to switch GPU. This will restart the display manager and all your applications will be closed.</source>
        <translation>Вы собираетесь переключить GPU. Это перезапустит менеджер входа, и все ваши приложения будут закрыты.</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="210"/>
        <source>You are about to switch GPU. After applying the settings, you will need to manually restart the login manager to change the video card.</source>
        <translation>Вы собираетесь переключить GPU. После применения настроек нужно будет вручную перезапустить менеджер входа для смены видеокарты.</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="221"/>
        <source>The optimus-manager service is not running. Please enable and start it with:</source>
        <translation>Сервис optimus-manager не запущен. Пожалуйста, включите и запустите его с:</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="234"/>
        <source>bbswitch is enabled in the configuration file but the bbswitch module does not seem to be available for the current kernel. Power switching will not work.
You can install bbswitch for the default kernel with &quot;sudo pacman -S bbswitch&quot; or for all kernels with &quot;sudo pacman -S bbswitch-dkms&quot;.</source>
        <translation>bbswitch включен в файле конфигурации, но модуль bbswitch, по-видимому, недоступен для текущего ядра. Переключение питания не будет работать.
Вы можете установить bbswitch для ядра по умолчанию с помощью &quot;sudo pacman -S bbswitch&quot; или для всех ядер с помощью &quot;sudo pacman -S bbswitch-dkms&quot;.</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="247"/>
        <source>The nvidia module does not seem to be available for the current kernel. It is likely the Nvidia driver was not properly installed. GPU switching will probably fail, continue anyway?</source>
        <translation>Модуль nvidia не доступен для текущего ядра. Вероятно, драйвер Nvidia не был правильно установлен. Переключение GPU, скорее всего, не удастся, все равно продолжить?</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="264"/>
        <source>Unable to connect to optimus-manager daemon to switch GPU: </source>
        <translation>Не удается подключиться к демону optimus-manager для переключения GPU: </translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="283"/>
        <source>Unable to send GPU to switch to optimus-manager daemon: </source>
        <translation>Не удается отправить GPU для переключения на демон optimus-manager: </translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="288"/>
        <source>Configuration successfully applied. Your GPU will be switched after the login manager is restarted.</source>
        <translation>Конфигурация успешно применена. Ваш GPU будет переключен после перезапуска менеджера входа.</translation>
    </message>
</context>
<context>
    <name>OptimusSettings</name>
    <message>
        <location filename="../../src/optimussettings.cpp" line="64"/>
        <source>Unable to connect to optimus-manager daemon to send startup mode: </source>
        <translation>Не удается подключиться к демону optimus-manager для отправки режима запуска: </translation>
    </message>
    <message>
        <location filename="../../src/optimussettings.cpp" line="70"/>
        <source>Unable to send startup mode to optimus-manager daemon: </source>
        <translation>Не удается отправить режим запуска демону optimus-manager: </translation>
    </message>
    <message>
        <location filename="../../src/optimussettings.cpp" line="79"/>
        <source>Unable to open startup mode file</source>
        <translation>Не удается открыть файл режима запуска</translation>
    </message>
    <message>
        <location filename="../../src/optimussettings.cpp" line="94"/>
        <source>Unknown mode in startup file</source>
        <translation>Неизвестный режим в файле запуска</translation>
    </message>
</context>
<context>
    <name>SettingsDialog</name>
    <message>
        <location filename="../../src/settingsdialog.ui" line="14"/>
        <location filename="../../src/optimusmanager.cpp" line="48"/>
        <location filename="../../src/optimusmanager.cpp" line="191"/>
        <source>Settings</source>
        <translation>Настройки</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="59"/>
        <location filename="../../src/settingsdialog.ui" line="112"/>
        <source>General</source>
        <translation>Общее</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="95"/>
        <source>About</source>
        <translation>О программе</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="172"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Application language&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Язык приложения&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="175"/>
        <source>Language:</source>
        <translation>Язык:</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="122"/>
        <source>&lt;System language&gt;</source>
        <translation>&lt;Язык системы&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="198"/>
        <source>Launch at startup</source>
        <translation>Запускать при старте системы</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="205"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Show confirmation dialog when switching GPU&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Показать диалог подтверждения при переключении GPU&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="208"/>
        <source>Confirm switching</source>
        <translation>Подтверждать переключение</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="245"/>
        <source>Nvidia icon:</source>
        <translation>Значок Nvidia:</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="391"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enable PCI power management in Intel mode&lt;/p&gt;&lt;p&gt;If you do not enable this option, you may see a higher power comsumption&lt;/p&gt;&lt;p&gt;This option is incompatible with bbswitch and will be ignored if it is enabled&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Включить управление питанием PCI в режиме Intel&lt;/p&gt;&lt;p&gt;Если вы не включите эту опцию, то можете столкнуться с более выскоим энергопотреблением&lt;/p&gt;&lt;p&gt;Эта опция несовместима с bbswitch и будет игнорироваться, если он включен&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="401"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Reset the Nvidia PCI device when switching&lt;/p&gt;&lt;p&gt;Avoids driver conflicts, especially when switching from Nvidia mode to Intel Mode&lt;/p&gt;&lt;p&gt;This option is incompatible with bbswitch and will be ignored if it is enabled&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Сброс Nvidia PCI при переключении&lt;/p&gt;&lt;p&gt;Предотвращает конфликты драйверов, особенно при переключении из Nvidia в Intel&lt;/p&gt;&lt;p&gt;Эта опция несовместима с bbswitch и будет игнорироваться, если он включен&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="224"/>
        <source>Intel icon:</source>
        <translation>Значок Intel:</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="324"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Specify which GPU will be used by default when the system boots&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Указать какой GPU будет использоваться по умолчанию при загрузке системы&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="314"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Module used for power switching&lt;/p&gt;&lt;p&gt;If you select &amp;quot;None&amp;quot;, no power switching will be done at all (the Nvidia GPU will stay powered at all times)&lt;/p&gt;&lt;p&gt;If you use bbswitch, you will not be able to use video outputs attached to your Nvidia GPU in Intel mode&lt;/p&gt;&lt;p&gt;To use the bbswitch mode, the bbswitch module must be installed for your current kernel&lt;/p&gt;&lt;p&gt;You can install it for the default kernel with &amp;quot;pacman -S bbswitch&amp;quot;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Модуль, который используется для переключения питания&lt;/p&gt;&lt;p&gt;Если вы выберете &amp;quot;Отсутствует&amp;quot;, питание переключаться не будет (Nvidia GPU будет работать постоянно)&lt;/p&gt;&lt;p&gt;Если вы используете bbswitch, то не сможете использовать видеовыходы, подключенные к Nvidia GPU в режиме Intel&lt;/p&gt;&lt;p&gt;Чтобы использовать режим bbswitch, модуль bbswitch должен быть установлен для вашего текущего ядра&lt;/p&gt;&lt;p&gt;Вы можете установить его для ядра по умолчанию с помощью &amp;quot;pacman -S bbswitch&amp;quot;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="356"/>
        <source>Nvidia (one boot)</source>
        <translation>Nvidia (одна загрузка)</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="652"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;This will be set using the Xsetup script passed to your login manager&lt;br/&gt;It will run the command&lt;/p&gt;&lt;p&gt;xrandr --dpi &amp;lt;dpi value&amp;gt;&lt;/p&gt;&lt;p&gt;Leave 0 for the default&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Это будет установлено с помощью скрипта Xsetup, который передается вашему менеджеру входа&lt;br/&gt;Он запускает команду&lt;/p&gt;&lt;p&gt;xrandr --dpi &amp;lt;dpi value&amp;gt;&lt;/p&gt;&lt;p&gt;Оставьте 0 для значения по умолчанию&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="692"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Whether or not to enable the NVreg_UsePageAttributeTable option in the Nvidia driver &lt;span style=&quot; font-style:italic;&quot;&gt;Recommended&lt;/span&gt;, can cause poor CPU performance otherwise&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Включить или нет параметр NVreg_UsePageAttributeTable в драйвере Nvidia&lt;span style=&quot; font-style:italic;&quot;&gt;Рекомендуется&lt;/span&gt;, в противном случае может привести к снижению производительности процессора&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="705"/>
        <source>Overclocking options</source>
        <translation>Опции разгона</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="317"/>
        <source>Switching backend:</source>
        <translation>Бэкенд для переключения:</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="195"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;~/.config/autostart will be used&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>Будет использован ~/.config/autostart</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="218"/>
        <source>Tray icons</source>
        <translation>Иконки в трее</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="252"/>
        <location filename="../../src/settingsdialog.ui" line="259"/>
        <source>Choose icon</source>
        <translation>Выбрать значок</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="327"/>
        <source>Startup mode:</source>
        <translation>Режим при загрузке:</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="296"/>
        <source>None</source>
        <translation>Отсутствует</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="118"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Interface language&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Язык интерфейса&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="231"/>
        <location filename="../../src/settingsdialog.ui" line="238"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Path to the icon or icon name from theme&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Путь к значку или название значка из темы&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="292"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Backend to be used for switching GPU&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Бэкэнд, который будет использоваться для переключения GPU&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="334"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;GPU that will be used during normal system startup&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;GPU, который будет использоваться при обычном запуске системы&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="381"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Whether or not restart login manager when switching GPU&lt;/p&gt;&lt;p&gt;If disabled, the GPU switch is not applied until you have restarted it manually&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Перезапускать ли менеджер входа при переключении GPU&lt;/p&gt;&lt;p&gt;Если отключено, GPU не переключится, пока вы не перезапустите менеджер входа вручную&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="384"/>
        <source>Login manager control</source>
        <translation>Управление менеджером входа</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="394"/>
        <source>PCI power control</source>
        <translation>Управление питанием PCI</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="404"/>
        <source>PCI reset</source>
        <translation>PCI reset</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="414"/>
        <source>Terminate sessions</source>
        <translation>Завершать сессии</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="424"/>
        <source>Kill X11</source>
        <translation>Убивать X11</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="434"/>
        <source>Kill logind</source>
        <translation>Убивать logind</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="491"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Driver to use for the Intel GPU&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Драйвер для использования с Intel GPU&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="467"/>
        <source>Driver:</source>
        <translation>Драйвер:</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="557"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enable AccelMethod option in the Xorg configuration&lt;br/&gt;&lt;br/&gt;This option compatible only with the Intel driver and will be ignored if it is not selected&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Включить опцию AccelMethod в конфигурации Xorg&lt;br/&gt;&lt;br/&gt;Эта опция совместима только с драйвером Intel и будет игнорироваться, если он не выбран&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="508"/>
        <source>Acceleration method:</source>
        <translation>Метод графического ускорения:</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="529"/>
        <location filename="../../src/settingsdialog.ui" line="561"/>
        <source>Default</source>
        <translation>По умолчанию</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="525"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enable TearFree option in the Xorg configuration&lt;br/&gt;&lt;br/&gt;This option compatible only with the Intel driver and will be ignored if it is not selected&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Включить опцию TearFree в конфигурации Xorg&lt;br/&gt;&lt;br/&gt;Эта опция совместима только с драйвером Intel и будет игнорироваться, если он не выбран&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="534"/>
        <source>Yes</source>
        <translation>Да</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="539"/>
        <source>No</source>
        <translation>Нет</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="474"/>
        <location filename="../../src/settingsdialog.ui" line="635"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;DRI version&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Версия DRI&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="411"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Whether or not to manually terminate logind sessions when switching GPU&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Следует ли вручную завершать сессии logind при переключении GPU&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="421"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Whether or not to manually kill X11 servers when switching GPU&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Следует ли вручную убивать сервера X11 при переключении GPU&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="431"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Whether or not to manually kill logind when switching GPU&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Следует ли вручную убивать logind при переключении GPU&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="592"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Whether or not to enable modesetting for the nouveau driver&lt;/p&gt;&lt;p&gt;Does not affect modesetting for the Intel GPU driver&lt;/p&gt;&lt;p&gt;This option is incompatible with bbswitch and will be ignored if it is enabled&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Включение или отключение modesettings для драйвера nouveau&lt;/p&gt;&lt;p&gt;Не влияет на modesetting для драйвера Intel GPU&lt;/p&gt;&lt;p&gt;Эта опция несовместима с bbswitch и будет игнорироваться, если он включен&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="682"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Whether or not to enable modesetting&lt;/p&gt;&lt;p&gt;Required for PRIME Synchronization&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Включить или нет modesetting&lt;/p&gt;&lt;p&gt;Требуется для синхронизации PRIME&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="702"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enable CoolBits in the Xorg configuration and unlock clocking options in the Nvidia control panel&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Включить CoolBits в конфигурации Xorg и разблокировать опции разгона в панели управления Nvidia&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="712"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enable triple buffering&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Включить тройную буферизацию&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="715"/>
        <source>Triple buffer</source>
        <translation>Тройная буферизация</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="772"/>
        <location filename="../../src/settingsdialog.ui" line="903"/>
        <source>Version:</source>
        <translation>Версия:</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="786"/>
        <location filename="../../src/settingsdialog.ui" line="880"/>
        <source>Autor:</source>
        <translation>Автор:</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="793"/>
        <location filename="../../src/settingsdialog.ui" line="917"/>
        <source>License:</source>
        <translation>Лицензия:</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.cpp" line="224"/>
        <source>Select icon</source>
        <translation>Выбрать иконку</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.cpp" line="225"/>
        <source>Images (*.png *.jpg *.bmp);;All files(*)</source>
        <translation>Изображения (*.png *.jpg *.bmp);;Все файлы(*)</translation>
    </message>
</context>
</TS>