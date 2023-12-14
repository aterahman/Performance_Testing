/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 900.0, "minX": 0.0, "maxY": 4986.0, "series": [{"data": [[0.0, 900.0], [0.1, 900.0], [0.2, 905.0], [0.3, 905.0], [0.4, 911.0], [0.5, 911.0], [0.6, 912.0], [0.7, 912.0], [0.8, 916.0], [0.9, 916.0], [1.0, 922.0], [1.1, 922.0], [1.2, 923.0], [1.3, 923.0], [1.4, 925.0], [1.5, 925.0], [1.6, 927.0], [1.7, 927.0], [1.8, 927.0], [1.9, 927.0], [2.0, 929.0], [2.1, 929.0], [2.2, 931.0], [2.3, 931.0], [2.4, 931.0], [2.5, 931.0], [2.6, 933.0], [2.7, 933.0], [2.8, 934.0], [2.9, 934.0], [3.0, 934.0], [3.1, 934.0], [3.2, 934.0], [3.3, 934.0], [3.4, 934.0], [3.5, 934.0], [3.6, 934.0], [3.7, 936.0], [3.8, 936.0], [3.9, 937.0], [4.0, 937.0], [4.1, 941.0], [4.2, 941.0], [4.3, 941.0], [4.4, 941.0], [4.5, 945.0], [4.6, 945.0], [4.7, 946.0], [4.8, 946.0], [4.9, 946.0], [5.0, 946.0], [5.1, 947.0], [5.2, 947.0], [5.3, 949.0], [5.4, 949.0], [5.5, 951.0], [5.6, 951.0], [5.7, 952.0], [5.8, 952.0], [5.9, 953.0], [6.0, 953.0], [6.1, 955.0], [6.2, 955.0], [6.3, 962.0], [6.4, 962.0], [6.5, 964.0], [6.6, 964.0], [6.7, 965.0], [6.8, 967.0], [6.9, 967.0], [7.0, 971.0], [7.1, 971.0], [7.2, 972.0], [7.3, 972.0], [7.4, 977.0], [7.5, 977.0], [7.6, 979.0], [7.7, 979.0], [7.8, 980.0], [7.9, 980.0], [8.0, 980.0], [8.1, 980.0], [8.2, 981.0], [8.3, 981.0], [8.4, 982.0], [8.5, 982.0], [8.6, 983.0], [8.7, 983.0], [8.8, 984.0], [8.9, 984.0], [9.0, 984.0], [9.1, 984.0], [9.2, 984.0], [9.3, 984.0], [9.4, 986.0], [9.5, 986.0], [9.6, 986.0], [9.7, 986.0], [9.8, 986.0], [9.9, 986.0], [10.0, 991.0], [10.1, 992.0], [10.2, 992.0], [10.3, 994.0], [10.4, 994.0], [10.5, 994.0], [10.6, 994.0], [10.7, 994.0], [10.8, 994.0], [10.9, 995.0], [11.0, 995.0], [11.1, 995.0], [11.2, 995.0], [11.3, 995.0], [11.4, 995.0], [11.5, 995.0], [11.6, 995.0], [11.7, 996.0], [11.8, 996.0], [11.9, 997.0], [12.0, 997.0], [12.1, 998.0], [12.2, 998.0], [12.3, 999.0], [12.4, 999.0], [12.5, 1000.0], [12.6, 1000.0], [12.7, 1001.0], [12.8, 1001.0], [12.9, 1001.0], [13.0, 1001.0], [13.1, 1001.0], [13.2, 1001.0], [13.3, 1006.0], [13.4, 1007.0], [13.5, 1007.0], [13.6, 1008.0], [13.7, 1008.0], [13.8, 1009.0], [13.9, 1009.0], [14.0, 1011.0], [14.1, 1011.0], [14.2, 1012.0], [14.3, 1012.0], [14.4, 1013.0], [14.5, 1013.0], [14.6, 1014.0], [14.7, 1014.0], [14.8, 1015.0], [14.9, 1015.0], [15.0, 1017.0], [15.1, 1017.0], [15.2, 1017.0], [15.3, 1017.0], [15.4, 1018.0], [15.5, 1018.0], [15.6, 1018.0], [15.7, 1018.0], [15.8, 1020.0], [15.9, 1020.0], [16.0, 1020.0], [16.1, 1020.0], [16.2, 1022.0], [16.3, 1022.0], [16.4, 1022.0], [16.5, 1022.0], [16.6, 1023.0], [16.7, 1024.0], [16.8, 1024.0], [16.9, 1026.0], [17.0, 1026.0], [17.1, 1026.0], [17.2, 1026.0], [17.3, 1027.0], [17.4, 1027.0], [17.5, 1028.0], [17.6, 1028.0], [17.7, 1029.0], [17.8, 1029.0], [17.9, 1029.0], [18.0, 1029.0], [18.1, 1030.0], [18.2, 1030.0], [18.3, 1031.0], [18.4, 1031.0], [18.5, 1031.0], [18.6, 1031.0], [18.7, 1033.0], [18.8, 1033.0], [18.9, 1033.0], [19.0, 1033.0], [19.1, 1033.0], [19.2, 1033.0], [19.3, 1034.0], [19.4, 1034.0], [19.5, 1034.0], [19.6, 1034.0], [19.7, 1035.0], [19.8, 1035.0], [19.9, 1036.0], [20.0, 1036.0], [20.1, 1036.0], [20.2, 1037.0], [20.3, 1037.0], [20.4, 1037.0], [20.5, 1037.0], [20.6, 1038.0], [20.7, 1038.0], [20.8, 1038.0], [20.9, 1038.0], [21.0, 1039.0], [21.1, 1039.0], [21.2, 1040.0], [21.3, 1040.0], [21.4, 1040.0], [21.5, 1040.0], [21.6, 1042.0], [21.7, 1042.0], [21.8, 1042.0], [21.9, 1042.0], [22.0, 1042.0], [22.1, 1042.0], [22.2, 1043.0], [22.3, 1043.0], [22.4, 1046.0], [22.5, 1046.0], [22.6, 1046.0], [22.7, 1046.0], [22.8, 1046.0], [22.9, 1046.0], [23.0, 1046.0], [23.1, 1046.0], [23.2, 1047.0], [23.3, 1047.0], [23.4, 1049.0], [23.5, 1050.0], [23.6, 1050.0], [23.7, 1051.0], [23.8, 1051.0], [23.9, 1052.0], [24.0, 1052.0], [24.1, 1052.0], [24.2, 1052.0], [24.3, 1053.0], [24.4, 1053.0], [24.5, 1054.0], [24.6, 1054.0], [24.7, 1055.0], [24.8, 1055.0], [24.9, 1055.0], [25.0, 1055.0], [25.1, 1058.0], [25.2, 1058.0], [25.3, 1058.0], [25.4, 1058.0], [25.5, 1059.0], [25.6, 1059.0], [25.7, 1060.0], [25.8, 1060.0], [25.9, 1060.0], [26.0, 1060.0], [26.1, 1060.0], [26.2, 1060.0], [26.3, 1061.0], [26.4, 1061.0], [26.5, 1061.0], [26.6, 1061.0], [26.7, 1061.0], [26.8, 1061.0], [26.9, 1061.0], [27.0, 1061.0], [27.1, 1061.0], [27.2, 1062.0], [27.3, 1062.0], [27.4, 1062.0], [27.5, 1062.0], [27.6, 1062.0], [27.7, 1062.0], [27.8, 1063.0], [27.9, 1063.0], [28.0, 1063.0], [28.1, 1063.0], [28.2, 1064.0], [28.3, 1064.0], [28.4, 1065.0], [28.5, 1065.0], [28.6, 1065.0], [28.7, 1065.0], [28.8, 1066.0], [28.9, 1066.0], [29.0, 1067.0], [29.1, 1067.0], [29.2, 1067.0], [29.3, 1067.0], [29.4, 1067.0], [29.5, 1067.0], [29.6, 1068.0], [29.7, 1068.0], [29.8, 1071.0], [29.9, 1071.0], [30.0, 1071.0], [30.1, 1071.0], [30.2, 1071.0], [30.3, 1074.0], [30.4, 1074.0], [30.5, 1074.0], [30.6, 1074.0], [30.7, 1077.0], [30.8, 1077.0], [30.9, 1077.0], [31.0, 1077.0], [31.1, 1077.0], [31.2, 1077.0], [31.3, 1078.0], [31.4, 1078.0], [31.5, 1080.0], [31.6, 1080.0], [31.7, 1082.0], [31.8, 1082.0], [31.9, 1083.0], [32.0, 1083.0], [32.1, 1083.0], [32.2, 1083.0], [32.3, 1084.0], [32.4, 1084.0], [32.5, 1084.0], [32.6, 1084.0], [32.7, 1085.0], [32.8, 1085.0], [32.9, 1086.0], [33.0, 1086.0], [33.1, 1087.0], [33.2, 1087.0], [33.3, 1088.0], [33.4, 1088.0], [33.5, 1088.0], [33.6, 1089.0], [33.7, 1089.0], [33.8, 1090.0], [33.9, 1090.0], [34.0, 1090.0], [34.1, 1090.0], [34.2, 1092.0], [34.3, 1092.0], [34.4, 1093.0], [34.5, 1093.0], [34.6, 1094.0], [34.7, 1094.0], [34.8, 1094.0], [34.9, 1094.0], [35.0, 1095.0], [35.1, 1095.0], [35.2, 1096.0], [35.3, 1096.0], [35.4, 1097.0], [35.5, 1097.0], [35.6, 1098.0], [35.7, 1098.0], [35.8, 1099.0], [35.9, 1099.0], [36.0, 1100.0], [36.1, 1100.0], [36.2, 1100.0], [36.3, 1100.0], [36.4, 1101.0], [36.5, 1101.0], [36.6, 1101.0], [36.7, 1101.0], [36.8, 1101.0], [36.9, 1101.0], [37.0, 1101.0], [37.1, 1106.0], [37.2, 1106.0], [37.3, 1106.0], [37.4, 1106.0], [37.5, 1107.0], [37.6, 1107.0], [37.7, 1107.0], [37.8, 1107.0], [37.9, 1107.0], [38.0, 1107.0], [38.1, 1109.0], [38.2, 1109.0], [38.3, 1110.0], [38.4, 1110.0], [38.5, 1110.0], [38.6, 1110.0], [38.7, 1112.0], [38.8, 1112.0], [38.9, 1116.0], [39.0, 1116.0], [39.1, 1117.0], [39.2, 1117.0], [39.3, 1118.0], [39.4, 1118.0], [39.5, 1121.0], [39.6, 1121.0], [39.7, 1124.0], [39.8, 1124.0], [39.9, 1126.0], [40.0, 1126.0], [40.1, 1127.0], [40.2, 1127.0], [40.3, 1127.0], [40.4, 1128.0], [40.5, 1128.0], [40.6, 1129.0], [40.7, 1129.0], [40.8, 1133.0], [40.9, 1133.0], [41.0, 1133.0], [41.1, 1133.0], [41.2, 1134.0], [41.3, 1134.0], [41.4, 1135.0], [41.5, 1135.0], [41.6, 1138.0], [41.7, 1138.0], [41.8, 1138.0], [41.9, 1138.0], [42.0, 1141.0], [42.1, 1141.0], [42.2, 1141.0], [42.3, 1141.0], [42.4, 1141.0], [42.5, 1141.0], [42.6, 1141.0], [42.7, 1141.0], [42.8, 1144.0], [42.9, 1144.0], [43.0, 1145.0], [43.1, 1145.0], [43.2, 1147.0], [43.3, 1147.0], [43.4, 1147.0], [43.5, 1148.0], [43.6, 1148.0], [43.7, 1148.0], [43.8, 1148.0], [43.9, 1150.0], [44.0, 1150.0], [44.1, 1151.0], [44.2, 1151.0], [44.3, 1152.0], [44.4, 1152.0], [44.5, 1154.0], [44.6, 1154.0], [44.7, 1154.0], [44.8, 1154.0], [44.9, 1154.0], [45.0, 1154.0], [45.1, 1155.0], [45.2, 1155.0], [45.3, 1156.0], [45.4, 1156.0], [45.5, 1158.0], [45.6, 1158.0], [45.7, 1159.0], [45.8, 1159.0], [45.9, 1160.0], [46.0, 1160.0], [46.1, 1161.0], [46.2, 1161.0], [46.3, 1162.0], [46.4, 1162.0], [46.5, 1163.0], [46.6, 1163.0], [46.7, 1163.0], [46.8, 1163.0], [46.9, 1163.0], [47.0, 1164.0], [47.1, 1164.0], [47.2, 1164.0], [47.3, 1164.0], [47.4, 1167.0], [47.5, 1167.0], [47.6, 1173.0], [47.7, 1173.0], [47.8, 1174.0], [47.9, 1174.0], [48.0, 1176.0], [48.1, 1176.0], [48.2, 1177.0], [48.3, 1177.0], [48.4, 1177.0], [48.5, 1177.0], [48.6, 1178.0], [48.7, 1178.0], [48.8, 1179.0], [48.9, 1179.0], [49.0, 1183.0], [49.1, 1183.0], [49.2, 1184.0], [49.3, 1184.0], [49.4, 1184.0], [49.5, 1184.0], [49.6, 1188.0], [49.7, 1188.0], [49.8, 1188.0], [49.9, 1188.0], [50.0, 1189.0], [50.1, 1192.0], [50.2, 1192.0], [50.3, 1193.0], [50.4, 1193.0], [50.5, 1193.0], [50.6, 1193.0], [50.7, 1193.0], [50.8, 1193.0], [50.9, 1195.0], [51.0, 1195.0], [51.1, 1195.0], [51.2, 1195.0], [51.3, 1198.0], [51.4, 1198.0], [51.5, 1201.0], [51.6, 1201.0], [51.7, 1202.0], [51.8, 1202.0], [51.9, 1208.0], [52.0, 1208.0], [52.1, 1208.0], [52.2, 1208.0], [52.3, 1210.0], [52.4, 1210.0], [52.5, 1213.0], [52.6, 1213.0], [52.7, 1217.0], [52.8, 1217.0], [52.9, 1222.0], [53.0, 1222.0], [53.1, 1224.0], [53.2, 1224.0], [53.3, 1231.0], [53.4, 1232.0], [53.5, 1232.0], [53.6, 1235.0], [53.7, 1235.0], [53.8, 1236.0], [53.9, 1236.0], [54.0, 1240.0], [54.1, 1240.0], [54.2, 1241.0], [54.3, 1241.0], [54.4, 1246.0], [54.5, 1246.0], [54.6, 1248.0], [54.7, 1248.0], [54.8, 1248.0], [54.9, 1248.0], [55.0, 1270.0], [55.1, 1270.0], [55.2, 1292.0], [55.3, 1292.0], [55.4, 1300.0], [55.5, 1300.0], [55.6, 1313.0], [55.7, 1313.0], [55.8, 1322.0], [55.9, 1322.0], [56.0, 1325.0], [56.1, 1325.0], [56.2, 1352.0], [56.3, 1352.0], [56.4, 1358.0], [56.5, 1358.0], [56.6, 1364.0], [56.7, 1364.0], [56.8, 1364.0], [56.9, 1369.0], [57.0, 1369.0], [57.1, 1384.0], [57.2, 1384.0], [57.3, 1416.0], [57.4, 1416.0], [57.5, 1421.0], [57.6, 1421.0], [57.7, 1424.0], [57.8, 1424.0], [57.9, 1428.0], [58.0, 1428.0], [58.1, 1436.0], [58.2, 1436.0], [58.3, 1437.0], [58.4, 1437.0], [58.5, 1440.0], [58.6, 1440.0], [58.7, 1443.0], [58.8, 1443.0], [58.9, 1447.0], [59.0, 1447.0], [59.1, 1448.0], [59.2, 1448.0], [59.3, 1451.0], [59.4, 1451.0], [59.5, 1451.0], [59.6, 1451.0], [59.7, 1451.0], [59.8, 1451.0], [59.9, 1458.0], [60.0, 1458.0], [60.1, 1458.0], [60.2, 1461.0], [60.3, 1461.0], [60.4, 1465.0], [60.5, 1465.0], [60.6, 1465.0], [60.7, 1465.0], [60.8, 1468.0], [60.9, 1468.0], [61.0, 1469.0], [61.1, 1469.0], [61.2, 1472.0], [61.3, 1472.0], [61.4, 1473.0], [61.5, 1473.0], [61.6, 1474.0], [61.7, 1474.0], [61.8, 1474.0], [61.9, 1474.0], [62.0, 1477.0], [62.1, 1477.0], [62.2, 1477.0], [62.3, 1477.0], [62.4, 1478.0], [62.5, 1478.0], [62.6, 1480.0], [62.7, 1480.0], [62.8, 1481.0], [62.9, 1481.0], [63.0, 1483.0], [63.1, 1483.0], [63.2, 1486.0], [63.3, 1486.0], [63.4, 1488.0], [63.5, 1491.0], [63.6, 1491.0], [63.7, 1494.0], [63.8, 1494.0], [63.9, 1494.0], [64.0, 1494.0], [64.1, 1494.0], [64.2, 1494.0], [64.3, 1494.0], [64.4, 1494.0], [64.5, 1499.0], [64.6, 1499.0], [64.7, 1501.0], [64.8, 1501.0], [64.9, 1502.0], [65.0, 1502.0], [65.1, 1502.0], [65.2, 1502.0], [65.3, 1503.0], [65.4, 1503.0], [65.5, 1503.0], [65.6, 1503.0], [65.7, 1506.0], [65.8, 1506.0], [65.9, 1507.0], [66.0, 1507.0], [66.1, 1509.0], [66.2, 1509.0], [66.3, 1510.0], [66.4, 1510.0], [66.5, 1511.0], [66.6, 1511.0], [66.7, 1514.0], [66.8, 1515.0], [66.9, 1515.0], [67.0, 1516.0], [67.1, 1516.0], [67.2, 1517.0], [67.3, 1517.0], [67.4, 1518.0], [67.5, 1518.0], [67.6, 1520.0], [67.7, 1520.0], [67.8, 1520.0], [67.9, 1520.0], [68.0, 1521.0], [68.1, 1521.0], [68.2, 1524.0], [68.3, 1524.0], [68.4, 1524.0], [68.5, 1524.0], [68.6, 1525.0], [68.7, 1525.0], [68.8, 1525.0], [68.9, 1525.0], [69.0, 1525.0], [69.1, 1525.0], [69.2, 1525.0], [69.3, 1525.0], [69.4, 1527.0], [69.5, 1527.0], [69.6, 1529.0], [69.7, 1529.0], [69.8, 1530.0], [69.9, 1530.0], [70.0, 1534.0], [70.1, 1536.0], [70.2, 1536.0], [70.3, 1537.0], [70.4, 1537.0], [70.5, 1537.0], [70.6, 1537.0], [70.7, 1540.0], [70.8, 1540.0], [70.9, 1543.0], [71.0, 1543.0], [71.1, 1543.0], [71.2, 1543.0], [71.3, 1544.0], [71.4, 1544.0], [71.5, 1545.0], [71.6, 1545.0], [71.7, 1548.0], [71.8, 1548.0], [71.9, 1550.0], [72.0, 1550.0], [72.1, 1550.0], [72.2, 1550.0], [72.3, 1551.0], [72.4, 1551.0], [72.5, 1553.0], [72.6, 1553.0], [72.7, 1554.0], [72.8, 1554.0], [72.9, 1554.0], [73.0, 1554.0], [73.1, 1555.0], [73.2, 1555.0], [73.3, 1555.0], [73.4, 1556.0], [73.5, 1556.0], [73.6, 1558.0], [73.7, 1558.0], [73.8, 1558.0], [73.9, 1558.0], [74.0, 1559.0], [74.1, 1559.0], [74.2, 1560.0], [74.3, 1560.0], [74.4, 1562.0], [74.5, 1562.0], [74.6, 1562.0], [74.7, 1562.0], [74.8, 1563.0], [74.9, 1563.0], [75.0, 1563.0], [75.1, 1563.0], [75.2, 1564.0], [75.3, 1564.0], [75.4, 1565.0], [75.5, 1565.0], [75.6, 1567.0], [75.7, 1567.0], [75.8, 1572.0], [75.9, 1572.0], [76.0, 1574.0], [76.1, 1574.0], [76.2, 1574.0], [76.3, 1574.0], [76.4, 1574.0], [76.5, 1574.0], [76.6, 1575.0], [76.7, 1575.0], [76.8, 1575.0], [76.9, 1576.0], [77.0, 1576.0], [77.1, 1576.0], [77.2, 1576.0], [77.3, 1580.0], [77.4, 1580.0], [77.5, 1580.0], [77.6, 1580.0], [77.7, 1581.0], [77.8, 1581.0], [77.9, 1584.0], [78.0, 1584.0], [78.1, 1585.0], [78.2, 1585.0], [78.3, 1587.0], [78.4, 1587.0], [78.5, 1588.0], [78.6, 1588.0], [78.7, 1590.0], [78.8, 1590.0], [78.9, 1591.0], [79.0, 1591.0], [79.1, 1593.0], [79.2, 1593.0], [79.3, 1594.0], [79.4, 1594.0], [79.5, 1595.0], [79.6, 1595.0], [79.7, 1597.0], [79.8, 1597.0], [79.9, 1598.0], [80.0, 1598.0], [80.1, 1599.0], [80.2, 1600.0], [80.3, 1600.0], [80.4, 1601.0], [80.5, 1601.0], [80.6, 1601.0], [80.7, 1601.0], [80.8, 1602.0], [80.9, 1602.0], [81.0, 1603.0], [81.1, 1603.0], [81.2, 1604.0], [81.3, 1604.0], [81.4, 1604.0], [81.5, 1604.0], [81.6, 1606.0], [81.7, 1606.0], [81.8, 1608.0], [81.9, 1608.0], [82.0, 1608.0], [82.1, 1608.0], [82.2, 1611.0], [82.3, 1611.0], [82.4, 1613.0], [82.5, 1613.0], [82.6, 1615.0], [82.7, 1615.0], [82.8, 1619.0], [82.9, 1619.0], [83.0, 1621.0], [83.1, 1621.0], [83.2, 1622.0], [83.3, 1622.0], [83.4, 1623.0], [83.5, 1623.0], [83.6, 1623.0], [83.7, 1623.0], [83.8, 1623.0], [83.9, 1625.0], [84.0, 1625.0], [84.1, 1626.0], [84.2, 1626.0], [84.3, 1628.0], [84.4, 1628.0], [84.5, 1628.0], [84.6, 1628.0], [84.7, 1628.0], [84.8, 1628.0], [84.9, 1632.0], [85.0, 1632.0], [85.1, 1634.0], [85.2, 1634.0], [85.3, 1634.0], [85.4, 1634.0], [85.5, 1635.0], [85.6, 1635.0], [85.7, 1636.0], [85.8, 1636.0], [85.9, 1636.0], [86.0, 1636.0], [86.1, 1637.0], [86.2, 1637.0], [86.3, 1640.0], [86.4, 1640.0], [86.5, 1645.0], [86.6, 1645.0], [86.7, 1649.0], [86.8, 1651.0], [86.9, 1651.0], [87.0, 1654.0], [87.1, 1654.0], [87.2, 1656.0], [87.3, 1656.0], [87.4, 1659.0], [87.5, 1659.0], [87.6, 1664.0], [87.7, 1664.0], [87.8, 1668.0], [87.9, 1668.0], [88.0, 1670.0], [88.1, 1670.0], [88.2, 1671.0], [88.3, 1671.0], [88.4, 1672.0], [88.5, 1672.0], [88.6, 1673.0], [88.7, 1673.0], [88.8, 1673.0], [88.9, 1673.0], [89.0, 1677.0], [89.1, 1677.0], [89.2, 1680.0], [89.3, 1680.0], [89.4, 1680.0], [89.5, 1680.0], [89.6, 1681.0], [89.7, 1681.0], [89.8, 1682.0], [89.9, 1682.0], [90.0, 1684.0], [90.1, 1686.0], [90.2, 1686.0], [90.3, 1689.0], [90.4, 1689.0], [90.5, 1697.0], [90.6, 1697.0], [90.7, 1708.0], [90.8, 1708.0], [90.9, 1712.0], [91.0, 1712.0], [91.1, 1714.0], [91.2, 1714.0], [91.3, 1717.0], [91.4, 1717.0], [91.5, 1721.0], [91.6, 1721.0], [91.7, 1731.0], [91.8, 1731.0], [91.9, 1732.0], [92.0, 1732.0], [92.1, 1736.0], [92.2, 1736.0], [92.3, 1740.0], [92.4, 1740.0], [92.5, 1741.0], [92.6, 1741.0], [92.7, 1752.0], [92.8, 1752.0], [92.9, 1756.0], [93.0, 1756.0], [93.1, 1763.0], [93.2, 1763.0], [93.3, 1768.0], [93.4, 1769.0], [93.5, 1769.0], [93.6, 1771.0], [93.7, 1771.0], [93.8, 1777.0], [93.9, 1777.0], [94.0, 1778.0], [94.1, 1778.0], [94.2, 1783.0], [94.3, 1783.0], [94.4, 1799.0], [94.5, 1799.0], [94.6, 1800.0], [94.7, 1800.0], [94.8, 1804.0], [94.9, 1804.0], [95.0, 1810.0], [95.1, 1810.0], [95.2, 1814.0], [95.3, 1814.0], [95.4, 1815.0], [95.5, 1815.0], [95.6, 1817.0], [95.7, 1817.0], [95.8, 1824.0], [95.9, 1824.0], [96.0, 1827.0], [96.1, 1827.0], [96.2, 1830.0], [96.3, 1830.0], [96.4, 1833.0], [96.5, 1833.0], [96.6, 1835.0], [96.7, 1835.0], [96.8, 1835.0], [96.9, 1841.0], [97.0, 1841.0], [97.1, 1852.0], [97.2, 1852.0], [97.3, 1918.0], [97.4, 1918.0], [97.5, 1920.0], [97.6, 1920.0], [97.7, 1945.0], [97.8, 1945.0], [97.9, 1952.0], [98.0, 1952.0], [98.1, 1991.0], [98.2, 1991.0], [98.3, 2147.0], [98.4, 2147.0], [98.5, 2279.0], [98.6, 2279.0], [98.7, 2487.0], [98.8, 2487.0], [98.9, 2488.0], [99.0, 2488.0], [99.1, 2494.0], [99.2, 2494.0], [99.3, 2603.0], [99.4, 2603.0], [99.5, 2869.0], [99.6, 2869.0], [99.7, 4771.0], [99.8, 4771.0], [99.9, 4986.0], [100.0, 4986.0]], "isOverall": false, "label": "GetUser", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 900.0, "maxY": 121.0, "series": [{"data": [[2100.0, 1.0], [2200.0, 1.0], [2400.0, 3.0], [2600.0, 1.0], [2800.0, 1.0], [900.0, 64.0], [1000.0, 121.0], [1100.0, 80.0], [1200.0, 20.0], [4700.0, 1.0], [4900.0, 1.0], [1300.0, 10.0], [1400.0, 38.0], [1500.0, 80.0], [1600.0, 54.0], [1700.0, 20.0], [1800.0, 14.0], [1900.0, 5.0]], "isOverall": false, "label": "GetUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4900.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 35.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 307.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 35.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 173.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 307.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 23.043269230769223, "minX": 1.70252352E12, "maxY": 23.153094462540732, "series": [{"data": [[1.70252358E12, 23.043269230769223], [1.70252352E12, 23.153094462540732]], "isOverall": false, "label": "Dashboard-25 users-ThreadStarter", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70252358E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 982.0, "minX": 1.0, "maxY": 2869.0, "series": [{"data": [[2.0, 1279.5], [3.0, 1182.0], [4.0, 1238.5], [5.0, 1520.0], [6.0, 1096.0], [7.0, 1226.0], [8.0, 1213.0], [9.0, 1451.0], [10.0, 1197.3333333333333], [11.0, 982.0], [12.0, 984.0], [13.0, 1428.5], [14.0, 1291.5], [15.0, 1155.0833333333333], [16.0, 1472.0], [1.0, 1852.0], [17.0, 1209.6666666666667], [18.0, 1300.0], [19.0, 1292.0], [20.0, 1196.6153846153848], [21.0, 1253.0], [22.0, 1443.4], [23.0, 1564.8], [24.0, 1277.5], [25.0, 1328.0536585365858], [26.0, 1601.0], [27.0, 2869.0], [28.0, 1636.5]], "isOverall": false, "label": "GetUser", "isController": false}, {"data": [[23.438834951456315, 1328.0524271844642]], "isOverall": false, "label": "GetUser-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 28.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1770.3666666666666, "minX": 1.70252352E12, "maxY": 34097.46666666667, "series": [{"data": [[1.70252358E12, 4829.066666666667], [1.70252352E12, 1770.3666666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.70252358E12, 13665.6], [1.70252352E12, 34097.46666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70252358E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1097.1954397394134, "minX": 1.70252352E12, "maxY": 1668.7884615384628, "series": [{"data": [[1.70252358E12, 1668.7884615384628], [1.70252352E12, 1097.1954397394134]], "isOverall": false, "label": "GetUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70252358E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1097.1465798045606, "minX": 1.70252352E12, "maxY": 1668.7115384615383, "series": [{"data": [[1.70252358E12, 1668.7115384615383], [1.70252352E12, 1097.1465798045606]], "isOverall": false, "label": "GetUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70252358E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 621.5528846153849, "minX": 1.70252352E12, "maxY": 727.1530944625408, "series": [{"data": [[1.70252358E12, 621.5528846153849], [1.70252352E12, 727.1530944625408]], "isOverall": false, "label": "GetUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70252358E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1416.0, "minX": 1.70252358E12, "maxY": 4986.0, "series": [{"data": [[1.70252358E12, 4986.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.70252358E12, 1827.3]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.70252358E12, 4599.819999999993]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.70252358E12, 1973.4499999999994]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.70252358E12, 1416.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.70252358E12, 1596.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70252358E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 986.0, "minX": 1.0, "maxY": 2383.0, "series": [{"data": [[4.0, 2383.0], [16.0, 1598.0], [1.0, 1852.0], [17.0, 1528.5], [18.0, 1601.5], [19.0, 1575.0], [12.0, 1552.5], [13.0, 1608.0], [14.0, 1533.5], [15.0, 1740.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[16.0, 1226.5], [17.0, 986.0], [10.0, 1399.0], [20.0, 1058.0], [21.0, 1144.0], [23.0, 1100.0], [24.0, 1075.5], [25.0, 1022.0], [15.0, 1092.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 986.0, "minX": 1.0, "maxY": 2383.0, "series": [{"data": [[4.0, 2383.0], [16.0, 1598.0], [1.0, 1852.0], [17.0, 1528.0], [18.0, 1601.5], [19.0, 1575.0], [12.0, 1552.5], [13.0, 1608.0], [14.0, 1533.5], [15.0, 1740.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[16.0, 1226.0], [17.0, 986.0], [10.0, 1399.0], [20.0, 1058.0], [21.0, 1144.0], [23.0, 1100.0], [24.0, 1075.5], [25.0, 1022.0], [15.0, 1092.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 3.466666666666667, "minX": 1.70252352E12, "maxY": 5.116666666666666, "series": [{"data": [[1.70252358E12, 3.466666666666667], [1.70252352E12, 5.116666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70252358E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 3.466666666666667, "minX": 1.70252352E12, "maxY": 5.116666666666666, "series": [{"data": [[1.70252358E12, 3.466666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.70252352E12, 5.116666666666666]], "isOverall": false, "label": "403", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70252358E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 3.466666666666667, "minX": 1.70252352E12, "maxY": 5.116666666666666, "series": [{"data": [[1.70252352E12, 5.116666666666666]], "isOverall": false, "label": "GetUser-failure", "isController": false}, {"data": [[1.70252358E12, 3.466666666666667]], "isOverall": false, "label": "GetUser-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70252358E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 3.466666666666667, "minX": 1.70252352E12, "maxY": 5.116666666666666, "series": [{"data": [[1.70252358E12, 3.466666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.70252352E12, 5.116666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70252358E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

