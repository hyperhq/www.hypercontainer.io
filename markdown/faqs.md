# FAQ

----------

## Q: Compare with Intel ClearContainer
Hyper and Clear Container (CC) share the similar idea: ***hypervisor-based AppC runtime***. The current release of CC supports rkt only; and Hyper currently supports Docker only. Also, 

	The goal of Clear Linux OS, is to showcase the best of Intel Architecture technology, from low level kernel features to more complex items that span across the entire operating system stack.

Hyper aims to be a technology-neutral open source solution.

## Q: Compare with QBoot
QBoot is a minimal x86 firmware that runs on QEMU and, together with a slimmed-down QEMU configuration, boots a virtual machine in 40 ms on an Ivy Bridge Core i7 processor. Hyper uses QBoot as the default boot option.

## Q: Compare with CoreOS or RancherOS
CoreOS and RancherOS are two popular minimalist Linux distros built for running app containers. Though primarily designed for bare metal server, they are commonly used as Guest OS in the cloud, due to the lack of isolation in containers. Hyper, on the other hand, ***eliminates the need of Guest OS***, by leveraging the hardware-enforced isolation in hypervisor.

With that said, we see Hyper as one form of *Containerization*. We would like to integrate Hyper with the minimalist Linux distros.

## Q: Does Hyper use Linux container?
No, Hyper is a ***pure hypervisor-based*** solution. It does not require any container technology (Docker daemon, LXC, Cgroup, Namespace), except ***`MOUNT`*** namespace for [Pod](https://docs.hyper.sh/pod/). 

## Q: What hypervisors are supported?
Hyper is ***hypervisor agnostic***. Currently Hyper supports KVM, with Xen and more options in the roadmap.

## Q: What is the performance of Hyper?

- Boot:
- CPU:
- Mem:
- Disk I/O:
- Network:

## Q: What kernel version is available in Hyper?
The current release of Hyper uses [kernel stable 4.0.1](https://www.kernel.org/pub/linux/kernel/v4.x/ChangeLog-4.0.1). Please note that you can configure Hyper to use ***any compatible Linux kernel***, though those might be slow and demand more resources.

