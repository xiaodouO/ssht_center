import service from "@/plugins/request";

// 获取取号量和办件量统计
export function apiGetTotalTicketAndService(params) {
  return service({
    url: "/api/v1/ServiceCenter/GetTotalTicketAndService",
    method: "get",
    params: params,
  });
}
// 获取大厅当日实时运行情况
export function apiGetRealtimeInfo(params) {
  return service({
    url: "/api/v1/ServiceCenter/GetRealtimeInfo",
    method: "get",
    params: params,
  });
}
// 获取部门业务办件数量统计
export function apiGetDepartmentServiceStats(params) {
  return service({
    url: "/api/v1/ServiceCenter/GetDepartmentServiceStats",
    method: "get",
    params: params,
  });
}
// 获取部门办件分析列表数据
export function apiGetDepartmentServiceAnalysisList(params) {
  return service({
    url: "/api/v1/ServiceCenter/GetDepartmentServiceAnalysisList",
    method: "get",
    params: params,
  });
}
// 获取热门服务事项列表top5
export function apiGetServiceStatsList(params) {
  return service({
    url: "/api/v1/ServiceCenter/GetServiceStatsList",
    method: "get",
    params: params,
  });
}
// 获取月办件量走势
export function apiGetMonthServiceStatsList(params) {
  return service({
    url: "/api/v1/ServiceCenter/GetMonthServiceStatsList",
    method: "get",
    params: params,
  });
}
// 获取月办件量走势
export function apiGetApprovalItemsList(params) {
  return service({
    url: "/api/v1/ServiceCenter/GetApprovalItemsList",
    method: "get",
    params: params,
  });
}
