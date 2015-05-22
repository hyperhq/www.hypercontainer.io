# How it works

Hyper has four components:

  - CLI: ***hyper***
  - Daemon: ***hyperd*** (with REST APIs)
  - Guest Kernel: ***hyperkernel***
  - Guest Init Service: ***hyperstart***
 
On a physical Linux host:
  
        [root@user ~:]# docker pull nginx:latest
        [root@user ~:]# hyper run nginx:latest

Upon the ***RUN*** command, Hyper launches a new VM instance, instead of containers, and mount the specified image onto the instance:

        [root@user ~:]# docker ps
        [root@user ~:]#
        [root@user ~:]# hyper list
        ......
        Done

Internal to the VM, a minimalist Linux kernel, called ***HyperKernel***, is booted. HyperKernel is built with a tiny Init service, called ***HyperStart***, which create a ***Pod***, setup *Mount* namespace, and launch apps from the loaded images.

![](https://trello-attachments.s3.amazonaws.com/554c998a4c9dacc5c143ec99/1083x635/08dfe9e383fb0b566986fc76e3a2c8c1/hyper_2.png)

## What is Pod?

Pod is a concept originated from [Google](https://github.com/GoogleCloudPlatform/kubernetes/blob/master/docs/pods.md). The key idea behind **Pod** is that in a microservie architecture usually involves some "helper" programs, such as log, monitoring, cron, etc. These helper programs are built to work cooperatively with the app. Therefore, instead of running in multiple isolated containers, these processes should share the namespace, though they are packaged in different images.

## Pod is the first class in Hyper

In Hyper, a pod consists of a group of app images, launched in a single instance.

	[root@user ~:]# hyper run -p nginx rails logstash cronjob

Inside of a Hyper instance, multiple applications from different images share the namespaces: ***`PID`***, ***`Network`***, ***`IPC`***, ***`UTS`***, ***`User`***. Pod helps to provide a familiar view of a tranditional OS to applications, rather than the philosophy of "***one process per container***":

- Processes can see each other
- Processes can use all IPC facilities to communicate
- Processes share the same hostname
- Processes have access to all NICs attached to the instance, and share the same port range
- Processes have access to all disk  attached to the instance

The exception is ***`Mount`***. Since a Pod may have multiple app images, Hyper applies the ***`Mount`*** namespace to isolate the root filesystem from each other.

Note: Hyper is immune from [Pid  1 problem](https://blog.phusion.nl/2015/01/20/docker-and-the-pid-1-zombie-reaping-problem/), since HyperStart  launches the app processes and continues to live in the same namespace with them.

**Find out more in [Hyper docs](https://docs.hyper.sh)**

