(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{374:function(t,e,r){t.exports=r.p+"assets/img/repeatable_committed1.d7e3decb.png"},375:function(t,e,r){t.exports=r.p+"assets/img/repeatable_committed2.91d36dfa.png"},376:function(t,e,r){t.exports=r.p+"assets/img/repeatable_committed3.f04afef5.png"},377:function(t,e,r){t.exports=r.p+"assets/img/repeatable_committed4.8e5343ba.png"},378:function(t,e,r){t.exports=r.p+"assets/img/repeatable_committed5.dc738b79.png"},379:function(t,e,r){t.exports=r.p+"assets/img/repeatable_committed6.2caa39b4.png"},380:function(t,e,r){t.exports=r.p+"assets/img/repeatable_committed7.244d09a1.png"},381:function(t,e,r){t.exports=r.p+"assets/img/repeatable_committed8.3e7049dd.png"},382:function(t,e,r){t.exports=r.p+"assets/img/synchronized1.4d94aafe.png"},383:function(t,e,r){t.exports=r.p+"assets/img/synchronized2.0e179d60.png"},384:function(t,e,r){t.exports=r.p+"assets/img/synchronized3.2569590d.png"},385:function(t,e,r){t.exports=r.p+"assets/img/share_or_exclude_lock.9039512f.png"},386:function(t,e,r){t.exports=r.p+"assets/img/table_lock.d40f61b5.png"},387:function(t,e,r){t.exports=r.p+"assets/img/lock_relation.c432bee4.png"},388:function(t,e,r){t.exports=r.p+"assets/img/redo_log1.33a93a02.png"},389:function(t,e,r){t.exports=r.p+"assets/img/redo_log2.d17eea1b.png"},453:function(t,e,r){"use strict";r.r(e);var a=r(42),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mysql章节2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql章节2"}},[t._v("#")]),t._v(" MySQL章节2")]),t._v(" "),a("h2",{attrs:{id:"mysql最牛的rr隔离级别-是如何基于readview机制实现的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql最牛的rr隔离级别-是如何基于readview机制实现的"}},[t._v("#")]),t._v(" MySQL最牛的RR隔离级别，是如何基于ReadView机制实现的？")]),t._v(" "),a("h3",{attrs:{id:"rr级别下如何解决不可重复读问题的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rr级别下如何解决不可重复读问题的"}},[t._v("#")]),t._v(" RR级别下如何解决不可重复读问题的")]),t._v(" "),a("p",[t._v("RR(可重复读)级别下，你这个事务读取一条数据，无论读多少次，都是一个值，别的事务哪怕修改数据之后提交了事务，你也是看不到人家修改的值的。这就避免了不可重复读的问题。别的事务插入一条数据，你也是看不到的，这就避免了幻读的问题。")]),t._v(" "),a("p",[t._v("那到底是如何实现的呢？"),a("br"),t._v(" "),a("strong",[t._v("核心地方在于RR隔离级别下，每次查询都是同一个ReadView")]),t._v("\n首先，我们还是假设数据库里有一条数据，这个数据是事务id=50的插入的。此时有事务A（id=60）和事务B（id=70）在同时运行，如下图所示：\n"),a("img",{attrs:{src:r(374),alt:"可重复读与ReadView",title:"repeatable_committed1.png"}})]),t._v(" "),a("p",[t._v("接着事务A发起了一次查询，因为是第一次查询，所以生成了ReadView，此时min_trx_id=60，max_trx_id=71,creator_trx_id=60,m_ids=[60,70],此时如下图：\n"),a("img",{attrs:{src:r(375),alt:"可重复读与ReadView",title:"repeatable_committed2.png"}})]),t._v(" "),a("p",[t._v("这个时候事务A基于这个ReadView去查询数据，此时trx_id=50，是小于min_trx_id=60，说它发起事务之前就已经有事务修改了数据并提交了事务，所以可以查到这条数据的原始值。如下图所示：\n"),a("img",{attrs:{src:r(376),alt:"可重复读与ReadView",title:"repeatable_committed3.png"}})]),t._v(" "),a("p",[t._v("接着事务B就更新了这行数据的值为B，此时会把trx_id修改为70，同时会生成undo log，关键是事务B提交了，也就是说此时事务B已经结束了，如下图：\n"),a("img",{attrs:{src:r(377),alt:"可重复读与ReadView",title:"repeatable_committed4.png"}})]),t._v(" "),a("p",[t._v("这个时候大家思考一个问题，ReadView中的m_ids还是[60,70]吗？")]),t._v(" "),a("p",[t._v("那必然是的，因为ReadView一旦生成了就不会改变了，这个时候事务B虽然已经结束了，但是事务A的ReadView里m_ids还是[60,70]。"),a("br"),t._v("\n它的意思是事务A开启的时候，事务B当时是在运行的。")]),t._v(" "),a("p",[t._v("那么此时事务A去查询这条数据的值，他会惊讶的发现此时数据的trx_id=70,70在min_trx_id和max_trx_id之间，同时还在m_ids=[60,70]列表中。"),a("br"),t._v("\n这说明事务A开启查询的时候，id=70的事务B还是在运行的，然后事务B更新了这条数据，所以此时事务A是不能查询到事务B更新的值，因此此时会顺着undo log版本链条往下找，如下图所示：\n"),a("img",{attrs:{src:r(378),alt:"可重复读与ReadView",title:"repeatable_committed5.png"}}),a("br"),t._v("\n事务A顺着roll_pointer找最近的undo log，发现最近的undo log的trx_id=50,它是小于min_trx_id=60的，说明它是在事务A开启之前就已经提交这个事务了，所以事务A是可以查询到这个值的，此时事务A查到的是原始值。"),a("br"),t._v(" "),a("img",{attrs:{src:r(379),alt:"可重复读与ReadView",title:"repeatable_committed6.png"}})]),t._v(" "),a("p",[t._v("可以看到两次查询查到的结果是一样的，都是原始值。不管别的事务如何修改数据，事务A的ReadView始终是不变的，基于这个ReadView看到的值始终是一样的。")]),t._v(" "),a("h3",{attrs:{id:"rr级别下如何解决幻读问题的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rr级别下如何解决幻读问题的"}},[t._v("#")]),t._v(" RR级别下如何解决幻读问题的")]),t._v(" "),a("p",[a("img",{attrs:{src:r(380),alt:"可重复读与ReadView",title:"repeatable_committed7.png"}}),a("br"),t._v(" "),a("img",{attrs:{src:r(381),alt:"可重复读与ReadView",title:"repeatable_committed8.png"}})]),t._v(" "),a("p",[t._v("MVCC是Multi-Version concurrent control,就是多版本并发控制机制。专门控制多个事务并发运行的时候，互相之间会如何影响。"),a("br"),t._v("\nMySQL实现MVCC机制的时候，是基于"),a("strong",[t._v("undo log多版本链条+ReadView")]),t._v("机制来做的，默认的RR隔离级别就是基于这套机制实现的。")]),t._v(" "),a("h2",{attrs:{id:"多个事务更新同一行数据时-是如何加锁避免脏写的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多个事务更新同一行数据时-是如何加锁避免脏写的"}},[t._v("#")]),t._v(" 多个事务更新同一行数据时，是如何加锁避免脏写的？")]),t._v(" "),a("p",[t._v("靠锁机制，依靠锁机制让多个事务更新同一行数据的时候串行化，避免同时更新一条数据。")]),t._v(" "),a("p",[t._v("假设MySQL里有一行数据，此时来了一个事务要更新它，更新之前需要先检查这行数据有没有锁，如果没有锁，这个事务就会创建一个锁，里面包含了自己的trx_id和等待状态，然后把锁跟这行数据关联在一起。")]),t._v(" "),a("p",[a("img",{attrs:{src:r(382),alt:"加锁避免脏写",title:"synchronized1.png"}})]),t._v(" "),a("p",[a("strong",[t._v("注意看上图，因为事务A已经给那行数据加了锁，所以此时就可以说那行数据已经被加锁了。")]),a("br"),t._v(" "),a("strong",[t._v("此时另外一个事务B过来了，它也想更新那行数据，更新前先检查这行数据有没有锁，如果已经有锁，B也给这行数据加个锁，然后排队等着。这个时候事务B也生成了一个锁数据结构，里面有它的trx_id和等待状态，但是因为它是排队等待，所以它的等待状态是true")]),t._v("。如下图所示：\n"),a("img",{attrs:{src:r(383),alt:"加锁避免脏写",title:"synchronized2.png"}})]),t._v(" "),a("p",[t._v("接着事务A更新完数据就把锁给释放了。锁一旦释放了，他就会去找，此时还有没有别人也对这行数据加锁了呢？他就会发现事务B也对该行数据加锁了，于是这个时候，就会把事务B的锁里的等待状态给修改为false，然后唤醒事务B继续执行，此时事务B就获取到锁了，如下图所示：\n"),a("img",{attrs:{src:r(384),alt:"加锁避免脏写",title:"synchronized3.png"}})]),t._v(" "),a("h2",{attrs:{id:"共享锁和独占锁到底是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#共享锁和独占锁到底是什么"}},[t._v("#")]),t._v(" 共享锁和独占锁到底是什么？")]),t._v(" "),a("h3",{attrs:{id:"独占锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#独占锁"}},[t._v("#")]),t._v(" 独占锁")]),t._v(" "),a("p",[t._v("前面讲过，多个事务同时更新一行数据，此时都会加锁，然后都会排队等待，必须一个事务执行完了，提交了，释放了锁，才能唤醒别的事务继续执行。"),a("br"),t._v("\n那么多个事务运行时加的是什么类型的锁呢？"),a("br"),t._v(" "),a("strong",[t._v("其实是X锁，也就是Exclude独占锁")]),t._v("，当有一个事务加了独占锁之后，此时其他事务再要更新这行数据，都是要加独占锁的，但是智能生成独占锁在后面等待。")]),t._v(" "),a("p",[t._v("当有人在更新数据的时候，其他的事务可以读取这行数据吗？默认情况下，需要加锁吗？"),a("br"),t._v("\n答案是：不需要。")]),t._v(" "),a("p",[t._v("原因：因为默认情况下，有人在更新数据的时候，你要去读取这行数据，直接默认就是开启MVCC机制的。"),a("br"),t._v("\n也就是说此时对一行数据的读和写两个操作，默认是不会加锁互斥的，因为MySQL设计MVCC机制就是为了解决这个问题的，避免频繁加锁互斥。"),a("br"),t._v(" "),a("font",{attrs:{color:"#0000FF",size:"4"}},[t._v("查询操作加互斥锁的方法： select * from table for update")])],1),t._v(" "),a("h3",{attrs:{id:"共享锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#共享锁"}},[t._v("#")]),t._v(" 共享锁")]),t._v(" "),a("p",[t._v("万一执行查询操作时，就是想要加锁呢？"),a("br"),t._v("\nMySQL也是Ok的，他提供了一种共享锁，就是S锁。"),a("br"),t._v(" "),a("font",{attrs:{color:"#0000FF",size:"4"}},[t._v("共享锁的语法如下：select * from table lock in share mode   ")]),a("br"),t._v("\n你在一个查询语句后面加上 lock in share mode，就表示查询时对这行数据加了共享锁。")],1),t._v(" "),a("p",[a("font",{attrs:{color:"FF0000",size:"4"}},[t._v("如果此时有别的事务在更新这行数据，已经加了独占锁了，此时你的共享锁还能加吗？")]),a("br"),t._v("\n当然不行，共享锁和独占锁是互斥的。此时你这个查询就只能等着了。")],1),t._v(" "),a("p",[a("font",{attrs:{color:"FF0000",size:"4"}},[t._v("如果你先加了共享锁，别人再来更新要加独占锁，行吗？")]),a("br"),t._v("\n当然不行，共享锁和独占锁是互斥的。此时你的更新只能等待。")],1),t._v(" "),a("p",[a("font",{attrs:{color:"FF0000",size:"4"}},[t._v("如果你先加了共享锁，别人也来加共享锁，行吗？")]),a("br"),t._v("\n可以，共享锁和共享锁不会互斥。"),a("br"),t._v(" "),a("img",{attrs:{src:r(385),alt:"共享锁和互斥锁关系图",title:"share_or_exclude_lock.png"}})],1),t._v(" "),a("h2",{attrs:{id:"哪些操作会导致在表级别加锁呢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哪些操作会导致在表级别加锁呢"}},[t._v("#")]),t._v(" 哪些操作会导致在表级别加锁呢？")]),t._v(" "),a("p",[t._v("在多个事务并发更新数据的时候，都是要在行级别加独占锁的，这就是行锁，独占锁都是互斥的，所以不可能发生脏写问题，一个事务提交了才会释放自己的独占锁，唤醒下一个事务执行。")]),t._v(" "),a("p",[t._v("如果你此时去读取别的事务在更新的数据，有两种可能：")]),t._v(" "),a("p",[t._v("第一种可能是基于mvcc机制进行事务隔离，读取快照版本，这是比较常见的；"),a("br"),t._v("\n第二种可能是查询的同时基于特殊语法去加独占锁或者共享锁。")]),t._v(" "),a("p",[t._v("太建议在数据库粒度去通过行锁实现复杂的业务锁机制，而更加建议通过redis、zookeeper来用分布式锁实现复杂业务下的锁机制，其实更为合适一些。")]),t._v(" "),a("p",[t._v("为什么呢？因为如果你把分布式系统里的复杂业务的一些锁机制依托数据库查询的时候，在SQL语句里加共享锁或者独占锁，会导致这个加锁逻辑隐藏在SQL语句里，在你的Java业务系统层面其实是非常的不好维护的，所以一般是不建议这么做的。")]),t._v(" "),a("p",[a("strong",[t._v("比较正常的情况而言，其实还是多个事务并发运行更新一条数据，默认加独占锁互斥，同时其他事务读取基于mvcc机制进行快照版本读，实现事务隔离。")])]),t._v(" "),a("p",[t._v("有些人可能会以为当你执行增删改的时候默认加行锁，然后执行DDL语句的时候，比如alter table之类的语句，会默认在表级别加表锁。这么说也不太正确，但是也有一定的道理，因为确实你执行DDL的时候，会阻塞所有增删改操作；执行增删改的时候，会阻塞DDL操作。")]),t._v(" "),a("p",[t._v("但这是通过MySQL通用的"),a("strong",[t._v("元数据锁实现的，也就是Metadata Locks，但这还不是表锁的概念")]),t._v("。因为"),a("strong",[t._v("表锁其实是InnoDB存储引擎的概念")]),t._v("，InnoDB存储引擎提供了自己的表级锁，跟这里DDL语句用的元数据锁还不是一个概念。")]),t._v(" "),a("p",[t._v("只不过DDL语句和增删改操作，确实是互斥的，大家要知道这一点。")]),t._v(" "),a("h2",{attrs:{id:"表锁和行锁互相之间的关系以及互斥规则是什么呢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表锁和行锁互相之间的关系以及互斥规则是什么呢"}},[t._v("#")]),t._v(" 表锁和行锁互相之间的关系以及互斥规则是什么呢？")]),t._v(" "),a("p",[t._v("MySQL的表锁其实非常鸡肋的东西，几乎不会有人用。表锁分为两种，一种是表锁，一种是表级的意向锁。")]),t._v(" "),a("p",[a("font",{attrs:{color:"#0000FF",size:"4"}},[t._v("表锁加锁语法："),a("br"),t._v("\nLOCK TABLES XXX READ  这是加表级共享锁"),a("br"),t._v("\nLOCK TABLES XXX WRITE 这是加表级独占锁"),a("br")])],1),t._v(" "),a("p",[a("font",{attrs:{color:"#0000FF",size:"4"}},[t._v("我们平时操作数据库，两种常见的表锁："),a("br"),t._v("\n更新时加的意向独占锁"),a("br"),t._v("\n查询时加的意向共享锁  ")]),a("br"),t._v("\n可以当这两种锁是透明的，因为意向独占锁和意向共享锁是不互斥的。"),a("br"),t._v(" "),a("img",{attrs:{src:r(386),alt:"表锁",title:"table_lock.png"}}),a("br"),t._v(" "),a("img",{attrs:{src:r(387),alt:"表锁关系",title:"lock_relation.png"}})],1),t._v(" "),a("h2",{attrs:{id:"线上数据库不确定性的性能抖动优化实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线上数据库不确定性的性能抖动优化实践"}},[t._v("#")]),t._v(" 线上数据库不确定性的性能抖动优化实践**")]),t._v(" "),a("p",[t._v("大家都知道，我们平时执行更新语句的时候，实际上都是从磁盘加载数据页到数据库内存的缓存页中，接着就直接更新内存里的缓存页，同时更新对应的redo log并写入一个buffer中，如下图所示：\n"),a("img",{attrs:{src:r(388),alt:"redo log",title:"redo_log1.png"}})]),t._v(" "),a("p",[t._v("既然我们更新了Buffer Pool里的缓存页，缓存页就变成了脏页，之所以说他是脏页，是因为缓存页里的数据目前跟磁盘文件里的数据页的数据是不一致的，所以此时的缓存页也叫作脏页。")]),t._v(" "),a("p",[a("strong",[t._v("既然是脏页就必然要有一个合适的时机把脏页给刷回磁盘文件，脏页刷回磁盘是通过LRU链表实现的，通过LRU链表，就可以知道哪些缓存页是最近经常被使用的。")])]),t._v(" "),a("p",[t._v("如果后续你要加载磁盘里的数据页到Buffer Pool中去，但是此时并没有空闲的缓存页了，此时就必须把部分脏页给刷回磁盘，根据LRU链表找到最近最少被访问的缓存页刷回磁盘。")]),t._v(" "),a("p",[a("img",{attrs:{src:r(389),alt:"redo log",title:"redo_log2.png"}})]),t._v(" "),a("p",[a("font",{attrs:{color:"#FF0000",size:"4"}},[t._v("生产案例：假设你执行的查询语句，需要查询大量的数据到缓存页里去，此时可能会导致大量的脏页需要刷回磁盘，才能腾出足够的内存空间来执行这条查询语句。在这种情况下，可能你会发现，突然莫名其妙的执行某个查询语句慢了很多，平时只要几十毫秒的查询，这次花了几秒，因为你要等待大量脏页刷回磁盘，然后语句才能执行")])],1)])}),[],!1,null,null,null);e.default=s.exports}}]);