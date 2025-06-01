# DamageAssessments

Types:

- <code><a href="./src/resources/damage-assessments.ts">DamageAssessment</a></code>
- <code><a href="./src/resources/damage-assessments.ts">DamageAssessmentRequest</a></code>

Methods:

- <code title="post /damage-assessments">client.damageAssessments.<a href="./src/resources/damage-assessments.ts">create</a>({ ...params }) -> DamageAssessment</code>
- <code title="get /damage-assessments/{assessment_id}">client.damageAssessments.<a href="./src/resources/damage-assessments.ts">retrieve</a>(assessmentID) -> DamageAssessment</code>

# Quotes

Types:

- <code><a href="./src/resources/quotes.ts">Quote</a></code>

Methods:

- <code title="post /quotes">client.quotes.<a href="./src/resources/quotes.ts">create</a>({ ...params }) -> Quote</code>
- <code title="get /quotes/{quote_id}">client.quotes.<a href="./src/resources/quotes.ts">retrieve</a>(quoteID) -> Quote</code>

# Appointments

Types:

- <code><a href="./src/resources/appointments/appointments.ts">Appointment</a></code>
- <code><a href="./src/resources/appointments/appointments.ts">AppointmentRequest</a></code>
- <code><a href="./src/resources/appointments/appointments.ts">AppointmentListResponse</a></code>

Methods:

- <code title="get /appointments/{appointment_id}">client.appointments.<a href="./src/resources/appointments/appointments.ts">retrieve</a>(appointmentID) -> Appointment</code>
- <code title="put /appointments/{appointment_id}">client.appointments.<a href="./src/resources/appointments/appointments.ts">update</a>(appointmentID, { ...params }) -> Appointment</code>
- <code title="get /appointments">client.appointments.<a href="./src/resources/appointments/appointments.ts">list</a>({ ...params }) -> AppointmentListResponse</code>
- <code title="post /appointments/{appointment_id}/assign-technician">client.appointments.<a href="./src/resources/appointments/appointments.ts">assignTechnician</a>(appointmentID, { ...params }) -> Appointment</code>
- <code title="post /appointments">client.appointments.<a href="./src/resources/appointments/appointments.ts">schedule</a>({ ...params }) -> Appointment</code>

## Progress

Types:

- <code><a href="./src/resources/appointments/progress.ts">ProgressUpdate</a></code>
- <code><a href="./src/resources/appointments/progress.ts">ProgressUpdateRequest</a></code>

Methods:

- <code title="get /appointments/{appointment_id}/progress">client.appointments.progress.<a href="./src/resources/appointments/progress.ts">retrieve</a>(appointmentID) -> ProgressUpdate</code>
- <code title="put /appointments/{appointment_id}/progress">client.appointments.progress.<a href="./src/resources/appointments/progress.ts">update</a>(appointmentID, { ...params }) -> ProgressUpdate</code>

## QaChecklists

Types:

- <code><a href="./src/resources/appointments/qa-checklists.ts">QaChecklist</a></code>
- <code><a href="./src/resources/appointments/qa-checklists.ts">QaChecklistRequest</a></code>

Methods:

- <code title="get /appointments/{appointment_id}/qa-checklists">client.appointments.qaChecklists.<a href="./src/resources/appointments/qa-checklists.ts">retrieve</a>(appointmentID) -> QaChecklist</code>
- <code title="post /appointments/{appointment_id}/qa-checklists">client.appointments.qaChecklists.<a href="./src/resources/appointments/qa-checklists.ts">submit</a>(appointmentID, { ...params }) -> QaChecklist</code>

# Services

Types:

- <code><a href="./src/resources/services.ts">ServiceListResponse</a></code>

Methods:

- <code title="get /services">client.services.<a href="./src/resources/services.ts">list</a>() -> ServiceListResponse</code>

# Technicians

Types:

- <code><a href="./src/resources/technicians.ts">TechnicianListResponse</a></code>

Methods:

- <code title="get /technicians">client.technicians.<a href="./src/resources/technicians.ts">list</a>() -> TechnicianListResponse</code>

# Feedback

Types:

- <code><a href="./src/resources/feedback.ts">FeedbackRequest</a></code>
- <code><a href="./src/resources/feedback.ts">FeedbackSubmitResponse</a></code>

Methods:

- <code title="post /feedback">client.feedback.<a href="./src/resources/feedback.ts">submit</a>({ ...params }) -> FeedbackSubmitResponse</code>

# Communications

Types:

- <code><a href="./src/resources/communications.ts">CommunicationChannel</a></code>
- <code><a href="./src/resources/communications.ts">CommunicationLog</a></code>
- <code><a href="./src/resources/communications.ts">CommunicationRequest</a></code>

Methods:

- <code title="post /communications/send">client.communications.<a href="./src/resources/communications.ts">send</a>({ ...params }) -> CommunicationLog</code>

# Customers

Types:

- <code><a href="./src/resources/customers.ts">CustomerRetrieveCommunicationHistoryResponse</a></code>
- <code><a href="./src/resources/customers.ts">CustomerRetrieveNotificationsResponse</a></code>

Methods:

- <code title="get /customers/{customer_id}/communication-history">client.customers.<a href="./src/resources/customers.ts">retrieveCommunicationHistory</a>(customerID, { ...params }) -> CustomerRetrieveCommunicationHistoryResponse</code>
- <code title="get /customers/{customer_id}/notifications">client.customers.<a href="./src/resources/customers.ts">retrieveNotifications</a>(customerID, { ...params }) -> CustomerRetrieveNotificationsResponse</code>

# Weather

Types:

- <code><a href="./src/resources/weather.ts">WeatherGetForecastResponse</a></code>

Methods:

- <code title="get /weather/forecast">client.weather.<a href="./src/resources/weather.ts">getForecast</a>({ ...params }) -> WeatherGetForecastResponse</code>

# Vehicles

Types:

- <code><a href="./src/resources/vehicles.ts">VehicleRetrieveMaintenanceHistoryResponse</a></code>
- <code><a href="./src/resources/vehicles.ts">VehicleRetrieveMaintenanceRecommendationsResponse</a></code>

Methods:

- <code title="get /vehicles/{vehicle_id}/maintenance-history">client.vehicles.<a href="./src/resources/vehicles.ts">retrieveMaintenanceHistory</a>(vehicleID) -> VehicleRetrieveMaintenanceHistoryResponse</code>
- <code title="get /vehicles/{vehicle_id}/maintenance-recommendations">client.vehicles.<a href="./src/resources/vehicles.ts">retrieveMaintenanceRecommendations</a>(vehicleID) -> VehicleRetrieveMaintenanceRecommendationsResponse</code>

# Analytics

Types:

- <code><a href="./src/resources/analytics.ts">AnalyticsRetrieveKpisResponse</a></code>
- <code><a href="./src/resources/analytics.ts">AnalyticsRetrieveServiceTrendsResponse</a></code>

Methods:

- <code title="get /analytics/kpis">client.analytics.<a href="./src/resources/analytics.ts">retrieveKpis</a>({ ...params }) -> AnalyticsRetrieveKpisResponse</code>
- <code title="get /analytics/service-trends">client.analytics.<a href="./src/resources/analytics.ts">retrieveServiceTrends</a>({ ...params }) -> AnalyticsRetrieveServiceTrendsResponse</code>

# Notifications

Types:

- <code><a href="./src/resources/notifications.ts">NotificationLog</a></code>
- <code><a href="./src/resources/notifications.ts">NotificationType</a></code>

Methods:

- <code title="post /notifications/send-proactive">client.notifications.<a href="./src/resources/notifications.ts">sendProactive</a>({ ...params }) -> NotificationLog</code>

# Status

Types:

- <code><a href="./src/resources/status.ts">StatusCheckResponse</a></code>

Methods:

- <code title="get /status">client.status.<a href="./src/resources/status.ts">check</a>() -> StatusCheckResponse</code>
