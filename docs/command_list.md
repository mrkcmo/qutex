# Command List
|                             Command                                |   Arguments        | Authorization |
|--------------------------------------------------------------------|--------------------|:-------------:|
| [`create project NAME`](/qutex/projects/#creating-a-new-project)         | Project Name       | {% include "public_shield.md" %} |
| [`delete project NAME`](/qutex/projects/#deleting-a-project)             | Project Name       | {% include "auth_project_admin_shield.md" %} |
| [`list projects`](/qutex/projects/#listing-all-projects)                 |                    | {% include "public_shield.md" %} |
| [`create admin USER`](/qutex/administration/#adding-administrators)      | Administrator Name | {% include "auth_project_admin_shield.md" %} |
| [`delete admin USER`](/qutex/administration/#removing-administrators)    | Administrator Name | {% include "auth_project_admin_shield.md" %} |
| [`list admins`](/qutex/administration/#listing-administrators)           |                    | {% include "public_shield.md" %} |
| [`pun`](/qutex/eggs/#puns)                                               |                    | {% include "public_shield.md" %} |
| [`get status`](/qutex/eggs/#status)                                      |                    | {% include "public_shield.md" %} |
| [`get queue length history`](/qutex/analytics/#queue-length-history)     |                    | {% include "public_shield.md" %} |
| [`help`](/qutex/eggs/#puns)                                              |                    | {% include "public_shield.md" %} |
| [`set current queue to NAME`](/qutex/queues/#changing-the-current-queue) | Queue Name         | {% include "public_shield.md" %} |
| [`add me`](/qutex/queues/#adding-myself-into-a-queue)                    |                    | {% include "public_shield.md" %} |
| [`remove me`](/qutex/queues/#remove-myself-from-a-queue)                 |                    | {% include "public_shield.md" %} |
| [`add person USER`](/qutex/queues/#adding-others-to-a-queue)             | Person's Username  | {% include "auth_project_admin_shield.md" %} |
| [`remove person USER`](/qutex/queues/#removing-others-from-a-queue)      | Person's Username  | {% include "auth_project_admin_shield.md" %} |
| [`get queue`](/qutex/queues/#showing-the-members-in-the-queue)           |                    | {% include "public_shield.md" %} |
| [`get largest queue depth`](/qutex/queues/#getting-largest-queue-depth)  |                    | {% include "public_shield.md" %} |
| [`how long`](/qutex/queues/#getting-estimated-time-remaining-for-me)     |                    | {% include "public_shield.md" %} |
| [`create queue NAME`](/qutex/queues/#creating-a-new-queue)               | Queue Name         | {% include "auth_project_admin_shield.md" %} |
| [`delete queue NAME`](/qutex/queues/#deleting-a-queue)                   | Queue Name         | {% include "auth_project_admin_shield.md" %} |
| [`list queues`](/qutex/queues/#listing-all-queues)                       |                    | {% include "public_shield.md" %} |
| [`get registration`](/qutex/registrations/#check-registration)           |                    | {% include "public_shield.md" %} |
| [`register to project NAME`](/qutex/registrations/#changing-the-registration) | Project Name  | {% include "public_shield.md" %} |