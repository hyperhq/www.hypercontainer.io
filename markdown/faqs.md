# FAQ

----------

## Q: Which hypervisor does Hyper support?
Hyper is ***hypervisor agnostic***. Currently, Hyper supports KVM and Xen, with more options in the roadmap.

## Q: How is Hyper different from the minimalist Linux distros, such like CoreOS and RancherOS?
CoreOS and RancherOS are two popular minimalist Linux distros built for running app containers. Though primarily designed for bare metal server, they are commonly used as Guest OS in the cloud, due to the lack of isolation in containers. Hyper, on the other hand, ***eliminates the need of Guest OS***, by leveraging the hardware-enforced isolation in hypervisor.

With that said, we see Hyper as one form of *App Container*. We would like to integrate Hyper with the minimalist Linux distros.


## Q: What is the performance of Hyper?

- Boot:
- CPU:
- Mem:
- Disk I/O:
- Network:

## Q: Does Hyper use container technology at runtime?
No, Hyper is a ***pure virtualization-based*** solution. It does not require any container technology (Docker daemon, LXC, Cgroup, Namespace), except ***`Mount`*** namespace for [Pod](https://docs.hyper.sh/pod/). 

## Q: What kernel version is available in Hyper?
The current HyperKernel release is based on [stable 4.0.1](https://www.kernel.org/pub/linux/kernel/v4.x/ChangeLog-4.0.1). Please note that you can configure Hyper to use ***any compatible Linux kernel***, though those might be slow and demand more resources.

